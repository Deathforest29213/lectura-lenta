import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const moduleDir = path.join(root, 'public', 'resumen-visual', 'programacion-patrones-diseno')

const unitFolders = {
  creational: 'Unidad 2 - Creational Patterns',
  structural: 'Unidad 3 - Structural Patterns',
  behavioral: 'Unidad 4 - Behavioral Patterns',
}

const theme = {
  bg: '#2e343d',
  panel: '#3e4a56',
  panelAlt: '#465767',
  border: '#6689a1',
  text: '#fcdebe',
  muted: '#d8c0a4',
  accent: '#b26e63',
  line: '#d8c0a4',
}

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const wrapText = (text, max = 28) => {
  const words = String(text).split(/\s+/)
  const lines = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > max && current) {
      lines.push(current)
      current = word
    } else {
      current = next
    }
  }

  if (current) lines.push(current)
  return lines
}

const classBox = (node) => {
  const lines = [
    ...(node.stereotype ? [`<<${node.stereotype}>>`] : []),
    node.name,
    ...(node.fields ?? []),
    ...(node.methods ?? []),
  ]
  const headerLines = (node.stereotype ? 2 : 1)
  const h = node.h ?? Math.max(92, 38 + lines.length * 24)
  const headerH = node.headerH ?? Math.max(42, 16 + headerLines * 22)
  const bodyLines = lines.slice(headerLines)

  return `
    <g>
      <rect x="${node.x}" y="${node.y}" width="${node.w}" height="${h}" rx="10" fill="${theme.panel}" stroke="${theme.border}" stroke-width="2"/>
      <rect x="${node.x}" y="${node.y}" width="${node.w}" height="${headerH}" rx="10" fill="${node.fill ?? theme.panelAlt}" stroke="${theme.border}" stroke-width="2"/>
      <line x1="${node.x}" y1="${node.y + headerH}" x2="${node.x + node.w}" y2="${node.y + headerH}" stroke="${theme.border}" stroke-width="2"/>
      ${lines.slice(0, headerLines).map((line, index) => `
        <text x="${node.x + node.w / 2}" y="${node.y + 24 + index * 22}" text-anchor="middle" font-size="${line.startsWith('<<') ? 18 : 23}" font-weight="${line.startsWith('<<') ? 700 : 900}" fill="${theme.text}">${esc(line)}</text>
      `).join('')}
      ${bodyLines.map((line, index) => `
        <text x="${node.x + 18}" y="${node.y + headerH + 28 + index * 24}" font-size="19" fill="${theme.muted}">${esc(line)}</text>
      `).join('')}
    </g>
  `
}

const noteBox = (note) => {
  const lines = wrapText(note.text, note.max ?? 36)
  return `
    <g>
      <rect x="${note.x}" y="${note.y}" width="${note.w}" height="${note.h}" rx="12" fill="rgba(178, 110, 99, 0.16)" stroke="${theme.accent}" stroke-width="2"/>
      ${lines.map((line, index) => `
        <text x="${note.x + 18}" y="${note.y + 30 + index * 24}" font-size="18" fill="${theme.text}">${esc(line)}</text>
      `).join('')}
    </g>
  `
}

const arrow = (edge) => {
  const marker = {
    inherit: 'url(#inherit)',
    implement: 'url(#inherit)',
    association: 'url(#arrow)',
    dependency: 'url(#arrow)',
    composition: 'url(#diamond)',
  }[edge.type ?? 'association']
  const dash = edge.type === 'implement' || edge.type === 'dependency' ? 'stroke-dasharray="9 7"' : ''
  const markerAttr = edge.type === 'composition' ? `marker-start="${marker}"` : `marker-end="${marker}"`
  const points = edge.points?.length
    ? `d="M ${edge.x1} ${edge.y1} ${edge.points.map((point) => `L ${point[0]} ${point[1]}`).join(' ')} L ${edge.x2} ${edge.y2}"`
    : `d="M ${edge.x1} ${edge.y1} L ${edge.x2} ${edge.y2}"`

  return `
    <g>
      <path ${points} fill="none" stroke="${theme.line}" stroke-width="2.4" ${dash} ${markerAttr}/>
      ${edge.label ? `<text x="${edge.lx ?? (edge.x1 + edge.x2) / 2}" y="${edge.ly ?? (edge.y1 + edge.y2) / 2 - 8}" text-anchor="middle" font-size="17" fill="${theme.muted}">${esc(edge.label)}</text>` : ''}
    </g>
  `
}

const renderSvg = ({ title, subtitle, nodes, edges, notes = [] }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <marker id="arrow" markerWidth="14" markerHeight="14" refX="11" refY="5" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 11 5 L 0 10 z" fill="${theme.line}"/>
    </marker>
    <marker id="inherit" markerWidth="18" markerHeight="18" refX="16" refY="8" orient="auto" markerUnits="strokeWidth">
      <path d="M 1 1 L 16 8 L 1 15 z" fill="${theme.bg}" stroke="${theme.line}" stroke-width="2"/>
    </marker>
    <marker id="diamond" markerWidth="18" markerHeight="18" refX="2" refY="8" orient="auto" markerUnits="strokeWidth">
      <path d="M 2 8 L 9 1 L 16 8 L 9 15 z" fill="${theme.bg}" stroke="${theme.line}" stroke-width="2"/>
    </marker>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#10141a" flood-opacity="0.32"/>
    </filter>
  </defs>
  <rect width="1600" height="1000" fill="${theme.bg}"/>
  <rect x="38" y="38" width="1524" height="924" rx="34" fill="rgba(57, 64, 73, 0.68)" stroke="${theme.border}" stroke-width="2"/>
  <text x="80" y="104" font-family="Nunito, Arial, sans-serif" font-size="42" font-weight="900" fill="${theme.text}">${esc(title)}</text>
  <text x="80" y="144" font-family="Nunito, Arial, sans-serif" font-size="21" font-weight="700" letter-spacing="3" fill="${theme.muted}">${esc(subtitle)}</text>
  <g font-family="Nunito, Arial, sans-serif" filter="url(#shadow)">
    ${notes.map(noteBox).join('')}
    ${nodes.map(classBox).join('')}
  </g>
  <g font-family="Nunito, Arial, sans-serif">
    ${edges.map(arrow).join('')}
  </g>
  <text x="80" y="928" font-family="Nunito, Arial, sans-serif" font-size="18" fill="${theme.muted}">UML estructural generado para Lectura Lenta</text>
</svg>`

const diagrams = [
  {
    unit: 'creational',
    file: '01-factory-method',
    title: 'Factory Method',
    subtitle: 'Creational pattern · concrete product creation',
    nodes: [
      { name: 'Client', x: 90, y: 220, w: 220, methods: ['+ use(product)'] },
      { stereotype: 'abstract', name: 'Creator', x: 470, y: 180, w: 330, methods: ['+ operation()', '+ factoryMethod(): Product'] },
      { name: 'ConcreteCreator', x: 470, y: 560, w: 330, methods: ['+ factoryMethod(): Product'] },
      { stereotype: 'interface', name: 'Product', x: 1050, y: 190, w: 300, methods: ['+ execute()'] },
      { name: 'ConcreteProduct', x: 1050, y: 560, w: 300, methods: ['+ execute()'] },
    ],
    edges: [
      { type: 'dependency', x1: 310, y1: 270, x2: 470, y2: 250, label: 'uses' },
      { type: 'inherit', x1: 635, y1: 560, x2: 635, y2: 332 },
      { type: 'dependency', x1: 800, y1: 248, x2: 1050, y2: 248, label: 'creates' },
      { type: 'implement', x1: 1200, y1: 560, x2: 1200, y2: 312 },
    ],
  },
  {
    unit: 'creational',
    file: '02-abstract-factory',
    title: 'Abstract Factory',
    subtitle: 'Creational pattern · compatible product families',
    nodes: [
      { name: 'Client', x: 80, y: 430, w: 210, methods: ['+ buildUI()'] },
      { stereotype: 'interface', name: 'AbstractFactory', x: 420, y: 180, w: 330, methods: ['+ createA()', '+ createB()'] },
      { name: 'FactoryFamily1', x: 390, y: 590, w: 270, methods: ['+ createA()', '+ createB()'] },
      { name: 'FactoryFamily2', x: 700, y: 590, w: 270, methods: ['+ createA()', '+ createB()'] },
      { stereotype: 'interface', name: 'AbstractProductA', x: 1070, y: 160, w: 300, methods: ['+ render()'] },
      { stereotype: 'interface', name: 'AbstractProductB', x: 1070, y: 390, w: 300, methods: ['+ interact(A)'] },
      { name: 'ProductA1 / A2', x: 1040, y: 650, w: 260, methods: ['family-specific A'] },
      { name: 'ProductB1 / B2', x: 1320, y: 650, w: 220, methods: ['family-specific B'] },
    ],
    edges: [
      { type: 'dependency', x1: 290, y1: 470, x2: 420, y2: 280, label: 'uses factory' },
      { type: 'implement', x1: 525, y1: 590, x2: 555, y2: 326 },
      { type: 'implement', x1: 835, y1: 590, x2: 615, y2: 326 },
      { type: 'dependency', x1: 750, y1: 240, x2: 1070, y2: 240, label: 'creates A' },
      { type: 'dependency', x1: 750, y1: 300, x2: 1070, y2: 470, label: 'creates B' },
      { type: 'implement', x1: 1170, y1: 650, x2: 1220, y2: 282 },
      { type: 'implement', x1: 1430, y1: 650, x2: 1280, y2: 512 },
    ],
  },
  {
    unit: 'creational',
    file: '03-builder',
    title: 'Builder',
    subtitle: 'Creational pattern · step by step construction',
    nodes: [
      { name: 'Client', x: 90, y: 430, w: 220, methods: ['+ configure()'] },
      { name: 'Director', x: 420, y: 240, w: 270, methods: ['+ construct()'] },
      { stereotype: 'interface', name: 'Builder', x: 820, y: 160, w: 330, methods: ['+ buildPartA()', '+ buildPartB()', '+ getResult()'] },
      { name: 'ConcreteBuilder', x: 820, y: 560, w: 330, fields: ['- product: Product'], methods: ['+ buildPartA()', '+ buildPartB()', '+ getResult()'] },
      { name: 'Product', x: 1250, y: 560, w: 260, fields: ['parts'], methods: ['+ use()'] },
    ],
    edges: [
      { type: 'dependency', x1: 310, y1: 470, x2: 420, y2: 310, label: 'selects' },
      { type: 'association', x1: 690, y1: 310, x2: 820, y2: 250, label: 'uses' },
      { type: 'implement', x1: 985, y1: 560, x2: 985, y2: 330 },
      { type: 'association', x1: 1150, y1: 625, x2: 1250, y2: 625, label: 'creates' },
    ],
  },
  {
    unit: 'creational',
    file: '04-prototype',
    title: 'Prototype',
    subtitle: 'Creational pattern · clone configured instances',
    nodes: [
      { name: 'Client', x: 140, y: 390, w: 260, methods: ['+ cloneAndAdjust()'] },
      { stereotype: 'interface', name: 'Prototype', x: 650, y: 180, w: 320, methods: ['+ clone(): Prototype'] },
      { name: 'ConcretePrototypeA', x: 520, y: 580, w: 320, fields: ['state'], methods: ['+ clone()'] },
      { name: 'ConcretePrototypeB', x: 930, y: 580, w: 320, fields: ['state'], methods: ['+ clone()'] },
    ],
    edges: [
      { type: 'dependency', x1: 400, y1: 430, x2: 650, y2: 260, label: 'copies' },
      { type: 'implement', x1: 680, y1: 580, x2: 760, y2: 302 },
      { type: 'implement', x1: 1090, y1: 580, x2: 860, y2: 302 },
    ],
    notes: [{ x: 1180, y: 250, w: 300, h: 120, text: 'New objects start from an existing configured object.' }],
  },
  {
    unit: 'creational',
    file: '05-singleton',
    title: 'Singleton',
    subtitle: 'Creational pattern · one shared instance',
    nodes: [
      { name: 'Client A', x: 150, y: 250, w: 220, methods: ['+ use()'] },
      { name: 'Client B', x: 150, y: 560, w: 220, methods: ['+ use()'] },
      { name: 'Singleton', x: 680, y: 300, w: 420, fields: ['- static instance: Singleton', '- Singleton()'], methods: ['+ static getInstance()', '+ operation()'] },
    ],
    edges: [
      { type: 'dependency', x1: 370, y1: 300, x2: 680, y2: 400, label: 'getInstance()' },
      { type: 'dependency', x1: 370, y1: 610, x2: 680, y2: 500, label: 'same instance' },
    ],
    notes: [{ x: 1160, y: 375, w: 290, h: 116, text: 'Constructor is hidden; access is controlled through getInstance().' }],
  },
  {
    unit: 'structural',
    file: '01-adapter',
    title: 'Adapter',
    subtitle: 'Structural pattern · incompatible interface',
    nodes: [
      { name: 'Client', x: 100, y: 400, w: 240, methods: ['+ request()'] },
      { stereotype: 'interface', name: 'Target', x: 520, y: 180, w: 300, methods: ['+ request()'] },
      { name: 'Adapter', x: 520, y: 590, w: 300, fields: ['- adaptee'], methods: ['+ request()'] },
      { name: 'Adaptee', x: 1040, y: 590, w: 300, methods: ['+ specificRequest()'] },
    ],
    edges: [
      { type: 'dependency', x1: 340, y1: 440, x2: 520, y2: 260, label: 'expects' },
      { type: 'implement', x1: 670, y1: 590, x2: 670, y2: 302 },
      { type: 'association', x1: 820, y1: 655, x2: 1040, y2: 655, label: 'translates to' },
    ],
  },
  {
    unit: 'structural',
    file: '02-bridge',
    title: 'Bridge',
    subtitle: 'Structural pattern · independent dimensions',
    nodes: [
      { name: 'Abstraction', x: 260, y: 190, w: 320, fields: ['- implementor'], methods: ['+ operation()'] },
      { name: 'RefinedAbstraction', x: 260, y: 590, w: 320, methods: ['+ operation()'] },
      { stereotype: 'interface', name: 'Implementor', x: 920, y: 190, w: 320, methods: ['+ operationImpl()'] },
      { name: 'ConcreteImplA', x: 820, y: 590, w: 280, methods: ['+ operationImpl()'] },
      { name: 'ConcreteImplB', x: 1140, y: 590, w: 280, methods: ['+ operationImpl()'] },
    ],
    edges: [
      { type: 'inherit', x1: 420, y1: 590, x2: 420, y2: 310 },
      { type: 'association', x1: 580, y1: 255, x2: 920, y2: 255, label: 'has-a' },
      { type: 'implement', x1: 960, y1: 590, x2: 1040, y2: 310 },
      { type: 'implement', x1: 1280, y1: 590, x2: 1120, y2: 310 },
    ],
  },
  {
    unit: 'structural',
    file: '03-facade',
    title: 'Facade',
    subtitle: 'Structural pattern · simple entry to complex flow',
    nodes: [
      { name: 'Client', x: 100, y: 420, w: 240, methods: ['+ start()'] },
      { name: 'Facade', x: 530, y: 340, w: 310, methods: ['+ simpleOperation()'] },
      { name: 'SubsystemA', x: 1080, y: 160, w: 300, methods: ['+ stepA()'] },
      { name: 'SubsystemB', x: 1080, y: 390, w: 300, methods: ['+ stepB()'] },
      { name: 'SubsystemC', x: 1080, y: 620, w: 300, methods: ['+ stepC()'] },
    ],
    edges: [
      { type: 'dependency', x1: 340, y1: 460, x2: 530, y2: 410, label: 'one call' },
      { type: 'dependency', x1: 840, y1: 390, x2: 1080, y2: 240 },
      { type: 'dependency', x1: 840, y1: 430, x2: 1080, y2: 470 },
      { type: 'dependency', x1: 840, y1: 470, x2: 1080, y2: 700 },
    ],
  },
  {
    unit: 'structural',
    file: '04-decorator',
    title: 'Decorator',
    subtitle: 'Structural pattern · behavior by wrapping',
    nodes: [
      { stereotype: 'interface', name: 'Component', x: 620, y: 160, w: 330, methods: ['+ operation()'] },
      { name: 'ConcreteComponent', x: 260, y: 560, w: 320, methods: ['+ operation()'] },
      { stereotype: 'abstract', name: 'Decorator', x: 760, y: 500, w: 330, fields: ['- wrappee: Component'], methods: ['+ operation()'] },
      { name: 'ConcreteDecoratorA', x: 1040, y: 760, w: 330, methods: ['+ addedBehavior()'] },
    ],
    edges: [
      { type: 'implement', x1: 420, y1: 560, x2: 705, y2: 282 },
      { type: 'implement', x1: 925, y1: 500, x2: 825, y2: 282 },
      { type: 'association', x1: 925, y1: 500, x2: 900, y2: 282, label: 'wraps' },
      { type: 'inherit', x1: 1205, y1: 760, x2: 1010, y2: 638 },
    ],
  },
  {
    unit: 'structural',
    file: '05-proxy',
    title: 'Proxy',
    subtitle: 'Structural pattern · controlled access',
    nodes: [
      { name: 'Client', x: 120, y: 420, w: 240, methods: ['+ request()'] },
      { stereotype: 'interface', name: 'Subject', x: 650, y: 170, w: 300, methods: ['+ request()'] },
      { name: 'Proxy', x: 480, y: 590, w: 300, fields: ['- realSubject'], methods: ['+ request()'] },
      { name: 'RealSubject', x: 930, y: 590, w: 300, methods: ['+ request()'] },
    ],
    edges: [
      { type: 'dependency', x1: 360, y1: 460, x2: 480, y2: 650, label: 'calls' },
      { type: 'implement', x1: 630, y1: 590, x2: 750, y2: 292 },
      { type: 'implement', x1: 1080, y1: 590, x2: 850, y2: 292 },
      { type: 'association', x1: 780, y1: 650, x2: 930, y2: 650, label: 'controls' },
    ],
  },
  {
    unit: 'structural',
    file: '06-composite',
    title: 'Composite',
    subtitle: 'Structural pattern · parts and groups as one',
    nodes: [
      { stereotype: 'interface', name: 'Component', x: 610, y: 150, w: 360, methods: ['+ operation()', '+ add(Component)'] },
      { name: 'Leaf', x: 330, y: 570, w: 300, methods: ['+ operation()'] },
      { name: 'Composite', x: 910, y: 570, w: 340, fields: ['- children: Component[]'], methods: ['+ operation()', '+ add(Component)'] },
    ],
    edges: [
      { type: 'implement', x1: 480, y1: 570, x2: 700, y2: 296 },
      { type: 'implement', x1: 1080, y1: 570, x2: 880, y2: 296 },
      { type: 'composition', x1: 1080, y1: 570, x2: 820, y2: 296, label: 'children' },
    ],
  },
  {
    unit: 'structural',
    file: '07-flyweight',
    title: 'Flyweight',
    subtitle: 'Structural pattern · shared repeated state',
    nodes: [
      { name: 'Client', x: 100, y: 440, w: 240, methods: ['+ drawMany()'] },
      { name: 'FlyweightFactory', x: 460, y: 240, w: 340, fields: ['- cache: Map'], methods: ['+ getFlyweight(key)'] },
      { stereotype: 'interface', name: 'Flyweight', x: 950, y: 180, w: 300, methods: ['+ operation(extrinsic)'] },
      { name: 'ConcreteFlyweight', x: 950, y: 560, w: 330, fields: ['- intrinsicState'], methods: ['+ operation(extrinsic)'] },
      { name: 'Context', x: 470, y: 610, w: 320, fields: ['- extrinsicState', '- flyweight'], methods: ['+ operation()'] },
    ],
    edges: [
      { type: 'dependency', x1: 340, y1: 480, x2: 460, y2: 320, label: 'requests' },
      { type: 'association', x1: 800, y1: 320, x2: 950, y2: 260, label: 'shares' },
      { type: 'implement', x1: 1115, y1: 560, x2: 1100, y2: 302 },
      { type: 'association', x1: 790, y1: 670, x2: 950, y2: 665, label: 'uses' },
    ],
  },
  {
    unit: 'behavioral',
    file: '01-strategy',
    title: 'Strategy',
    subtitle: 'Behavioral pattern · interchangeable policy',
    nodes: [
      { name: 'Context', x: 160, y: 360, w: 300, fields: ['- strategy'], methods: ['+ execute()'] },
      { stereotype: 'interface', name: 'Strategy', x: 680, y: 170, w: 300, methods: ['+ algorithm()'] },
      { name: 'ConcreteStrategyA', x: 540, y: 580, w: 300, methods: ['+ algorithm()'] },
      { name: 'ConcreteStrategyB', x: 900, y: 580, w: 300, methods: ['+ algorithm()'] },
    ],
    edges: [
      { type: 'association', x1: 460, y1: 430, x2: 680, y2: 260, label: 'delegates' },
      { type: 'implement', x1: 690, y1: 580, x2: 770, y2: 292 },
      { type: 'implement', x1: 1050, y1: 580, x2: 890, y2: 292 },
    ],
  },
  {
    unit: 'behavioral',
    file: '02-state',
    title: 'State',
    subtitle: 'Behavioral pattern · behavior by internal state',
    nodes: [
      { name: 'Context', x: 150, y: 360, w: 320, fields: ['- state'], methods: ['+ request()', '+ setState()'] },
      { stereotype: 'interface', name: 'State', x: 680, y: 170, w: 300, methods: ['+ handle(context)'] },
      { name: 'ConcreteStateA', x: 540, y: 580, w: 300, methods: ['+ handle(context)'] },
      { name: 'ConcreteStateB', x: 900, y: 580, w: 300, methods: ['+ handle(context)'] },
    ],
    edges: [
      { type: 'association', x1: 470, y1: 430, x2: 680, y2: 260, label: 'current state' },
      { type: 'implement', x1: 690, y1: 580, x2: 770, y2: 292 },
      { type: 'implement', x1: 1050, y1: 580, x2: 890, y2: 292 },
      { type: 'dependency', x1: 900, y1: 655, x2: 470, y2: 500, label: 'may transition' },
    ],
  },
  {
    unit: 'behavioral',
    file: '03-template-method',
    title: 'Template Method',
    subtitle: 'Behavioral pattern · fixed recipe variable steps',
    nodes: [
      { stereotype: 'abstract', name: 'AbstractClass', x: 560, y: 170, w: 430, methods: ['+ templateMethod()', '# stepA()', '# stepB()', '# hook()'] },
      { name: 'ConcreteClass', x: 590, y: 610, w: 370, methods: ['# stepA()', '# stepB()'] },
    ],
    edges: [
      { type: 'inherit', x1: 775, y1: 610, x2: 775, y2: 352 },
    ],
    notes: [{ x: 1060, y: 330, w: 320, h: 150, text: 'templateMethod fixes the order; subclasses fill selected steps.' }],
  },
  {
    unit: 'behavioral',
    file: '04-observer',
    title: 'Observer',
    subtitle: 'Behavioral pattern · automatic reaction to changes',
    nodes: [
      { name: 'Subject', x: 210, y: 210, w: 330, fields: ['- observers[]'], methods: ['+ attach()', '+ detach()', '+ notify()'] },
      { name: 'ConcreteSubject', x: 210, y: 610, w: 330, fields: ['- state'], methods: ['+ getState()'] },
      { stereotype: 'interface', name: 'Observer', x: 910, y: 210, w: 300, methods: ['+ update()'] },
      { name: 'ConcreteObserver', x: 910, y: 610, w: 330, methods: ['+ update()'] },
    ],
    edges: [
      { type: 'inherit', x1: 375, y1: 610, x2: 375, y2: 382 },
      { type: 'association', x1: 540, y1: 300, x2: 910, y2: 300, label: 'notifies many' },
      { type: 'implement', x1: 1075, y1: 610, x2: 1060, y2: 332 },
      { type: 'dependency', x1: 910, y1: 670, x2: 540, y2: 670, label: 'reads state' },
    ],
  },
  {
    unit: 'behavioral',
    file: '05-mediator',
    title: 'Mediator',
    subtitle: 'Behavioral pattern · coordinated communication',
    nodes: [
      { stereotype: 'interface', name: 'Mediator', x: 650, y: 150, w: 300, methods: ['+ notify(sender, event)'] },
      { name: 'ConcreteMediator', x: 610, y: 520, w: 380, fields: ['- colleagueA', '- colleagueB'], methods: ['+ notify(sender, event)'] },
      { stereotype: 'abstract', name: 'Colleague', x: 160, y: 360, w: 300, fields: ['- mediator'], methods: ['+ changed()'] },
      { name: 'ColleagueA', x: 120, y: 720, w: 260, methods: ['+ actionA()'] },
      { name: 'ColleagueB', x: 420, y: 720, w: 260, methods: ['+ actionB()'] },
    ],
    edges: [
      { type: 'implement', x1: 800, y1: 520, x2: 800, y2: 272 },
      { type: 'association', x1: 460, y1: 430, x2: 610, y2: 610, label: 'talks through' },
      { type: 'inherit', x1: 250, y1: 720, x2: 285, y2: 482 },
      { type: 'inherit', x1: 550, y1: 720, x2: 335, y2: 482 },
    ],
  },
  {
    unit: 'behavioral',
    file: '06-chain-of-responsibility',
    title: 'Chain of Responsibility',
    subtitle: 'Behavioral pattern · request through handlers',
    nodes: [
      { name: 'Client', x: 80, y: 420, w: 230, methods: ['+ send(request)'] },
      { stereotype: 'abstract', name: 'Handler', x: 500, y: 200, w: 340, fields: ['- next: Handler'], methods: ['+ setNext()', '+ handle(request)'] },
      { name: 'ConcreteHandlerA', x: 430, y: 620, w: 320, methods: ['+ handle(request)'] },
      { name: 'ConcreteHandlerB', x: 820, y: 620, w: 320, methods: ['+ handle(request)'] },
    ],
    edges: [
      { type: 'association', x1: 310, y1: 460, x2: 500, y2: 300, label: 'request' },
      { type: 'association', x1: 840, y1: 300, x2: 500, y2: 300, label: 'next' },
      { type: 'inherit', x1: 590, y1: 620, x2: 630, y2: 374 },
      { type: 'inherit', x1: 980, y1: 620, x2: 710, y2: 374 },
      { type: 'association', x1: 750, y1: 690, x2: 820, y2: 690, label: 'passes if not handled' },
    ],
  },
  {
    unit: 'behavioral',
    file: '07-command',
    title: 'Command',
    subtitle: 'Behavioral pattern · action as an object',
    nodes: [
      { name: 'Client', x: 90, y: 250, w: 220, methods: ['+ configure()'] },
      { name: 'Invoker', x: 410, y: 250, w: 260, fields: ['- command'], methods: ['+ executeCommand()'] },
      { stereotype: 'interface', name: 'Command', x: 790, y: 170, w: 300, methods: ['+ execute()'] },
      { name: 'ConcreteCommand', x: 790, y: 570, w: 330, fields: ['- receiver'], methods: ['+ execute()'] },
      { name: 'Receiver', x: 1230, y: 570, w: 260, methods: ['+ action()'] },
    ],
    edges: [
      { type: 'association', x1: 310, y1: 310, x2: 410, y2: 310, label: 'sets' },
      { type: 'association', x1: 670, y1: 310, x2: 790, y2: 250, label: 'stores' },
      { type: 'implement', x1: 955, y1: 570, x2: 940, y2: 292 },
      { type: 'association', x1: 1120, y1: 640, x2: 1230, y2: 640, label: 'calls' },
    ],
  },
  {
    unit: 'behavioral',
    file: '08-iterator',
    title: 'Iterator',
    subtitle: 'Behavioral pattern · traversal without exposing structure',
    nodes: [
      { name: 'Client', x: 100, y: 420, w: 220, methods: ['+ iterate()'] },
      { stereotype: 'interface', name: 'Aggregate', x: 500, y: 160, w: 320, methods: ['+ createIterator()'] },
      { name: 'ConcreteAggregate', x: 500, y: 580, w: 340, fields: ['- items'], methods: ['+ createIterator()'] },
      { stereotype: 'interface', name: 'Iterator', x: 1030, y: 160, w: 300, methods: ['+ next()', '+ hasNext()'] },
      { name: 'ConcreteIterator', x: 1030, y: 580, w: 320, fields: ['- position'], methods: ['+ next()', '+ hasNext()'] },
    ],
    edges: [
      { type: 'dependency', x1: 320, y1: 460, x2: 500, y2: 250, label: 'asks iterator' },
      { type: 'implement', x1: 670, y1: 580, x2: 660, y2: 282 },
      { type: 'dependency', x1: 820, y1: 240, x2: 1030, y2: 240, label: 'returns' },
      { type: 'implement', x1: 1190, y1: 580, x2: 1180, y2: 282 },
      { type: 'association', x1: 1030, y1: 650, x2: 840, y2: 650, label: 'reads aggregate' },
    ],
  },
  {
    unit: 'behavioral',
    file: '09-memento',
    title: 'Memento',
    subtitle: 'Behavioral pattern · snapshot and restore',
    nodes: [
      { name: 'Originator', x: 230, y: 290, w: 330, fields: ['- state'], methods: ['+ save(): Memento', '+ restore(memento)'] },
      { name: 'Memento', x: 690, y: 330, w: 300, fields: ['- state'], methods: ['+ getState()'] },
      { name: 'Caretaker', x: 1120, y: 290, w: 300, fields: ['- history[]'], methods: ['+ undo()'] },
    ],
    edges: [
      { type: 'dependency', x1: 560, y1: 380, x2: 690, y2: 400, label: 'creates' },
      { type: 'association', x1: 1120, y1: 380, x2: 990, y2: 400, label: 'stores' },
      { type: 'dependency', x1: 690, y1: 455, x2: 560, y2: 455, label: 'restore' },
    ],
  },
  {
    unit: 'behavioral',
    file: '10-visitor',
    title: 'Visitor',
    subtitle: 'Behavioral pattern · new operations over stable structures',
    nodes: [
      { name: 'ObjectStructure', x: 80, y: 420, w: 300, methods: ['+ accept(visitor)'] },
      { stereotype: 'interface', name: 'Element', x: 560, y: 150, w: 300, methods: ['+ accept(visitor)'] },
      { name: 'ConcreteElementA', x: 420, y: 560, w: 300, methods: ['+ accept(visitor)'] },
      { name: 'ConcreteElementB', x: 760, y: 560, w: 300, methods: ['+ accept(visitor)'] },
      { stereotype: 'interface', name: 'Visitor', x: 1150, y: 150, w: 330, methods: ['+ visit(A)', '+ visit(B)'] },
      { name: 'ConcreteVisitor', x: 1150, y: 560, w: 330, methods: ['+ visit(A)', '+ visit(B)'] },
    ],
    edges: [
      { type: 'dependency', x1: 380, y1: 465, x2: 560, y2: 250, label: 'traverses' },
      { type: 'implement', x1: 570, y1: 560, x2: 650, y2: 272 },
      { type: 'implement', x1: 910, y1: 560, x2: 770, y2: 272 },
      { type: 'dependency', x1: 860, y1: 240, x2: 1150, y2: 240, label: 'accepts' },
      { type: 'implement', x1: 1315, y1: 560, x2: 1315, y2: 296 },
    ],
  },
]

for (const diagram of diagrams) {
  const unitFolder = unitFolders[diagram.unit]
  const outDir = path.join(moduleDir, unitFolder)
  const pngDir = path.join(outDir, 'png-source')
  const svg = `${renderSvg(diagram).replace(/[ \t]+$/gm, '')}\n`
  const pngPath = path.join(pngDir, `${diagram.file}.png`)
  const webpPath = path.join(outDir, `${diagram.file}.webp`)

  await mkdir(pngDir, { recursive: true })
  await writeFile(path.join(pngDir, `${diagram.file}.svg`), svg, 'utf8')
  await sharp(Buffer.from(svg)).png().toFile(pngPath)
  await sharp(pngPath).webp({ quality: 88 }).toFile(webpPath)
}

console.log(`Generated ${diagrams.length} UML diagrams in ${path.relative(root, moduleDir)}`)
