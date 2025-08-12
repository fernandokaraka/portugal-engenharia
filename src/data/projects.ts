export interface Project {
  id: string
  title: string
  summary: string
  location: string
  type: string
  year: number
  cover: string
  images: string[]
  description: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'edificio-torre-verde',
    title: 'Edifício Torre Verde',
    summary: 'Complexo residencial moderno com certificação ambiental',
    location: 'Lisboa, Portugal',
    type: 'Edifício Residencial',
    year: 2023,
    cover: '/images/projects/torre-verde-1.jpg',
    images: [
      '/images/projects/torre-verde-1.jpg',
      '/images/projects/torre-verde-2.jpg',
      '/images/projects/torre-verde-3.jpg',
      '/images/projects/torre-verde-4.jpg'
    ],
    description: `O Edifício Torre Verde representa um marco na construção sustentável em Lisboa. 
    Com 15 andares e 120 apartamentos, este projeto incorpora as mais avançadas tecnologias de 
    eficiência energética e materiais ecológicos.

    **Características principais:**
    - Certificação LEED Gold
    - Sistema de reaproveitamento de água da chuva
    - Painéis solares integrados na fachada
    - Jardins verticais em todas as faces do edifício
    - Sistema de ventilação natural inteligente

    O projeto foi concluído em tempo recorde de 18 meses, mantendo os mais altos padrões 
    de qualidade e segurança.`,
    featured: true
  },
  {
    id: 'ponte-rio-tejo',
    title: 'Ponte do Rio Tejo',
    summary: 'Infraestrutura rodoviária conectando duas margens do Tejo',
    location: 'Santarém, Portugal',
    type: 'Infraestrutura',
    year: 2022,
    cover: '/images/projects/ponte-tejo-1.jpg',
    images: [
      '/images/projects/ponte-tejo-1.jpg',
      '/images/projects/ponte-tejo-2.jpg',
      '/images/projects/ponte-tejo-3.jpg'
    ],
    description: `Uma obra de arte da engenharia que conecta duas importantes regiões de Portugal. 
    A ponte possui 850 metros de extensão e foi projetada para suportar tráfego pesado por mais 
    de 100 anos.

    **Especificações técnicas:**
    - Extensão total: 850 metros
    - Capacidade: 40.000 veículos/dia
    - Altura máxima: 65 metros
    - Materiais: Concreto armado e aço especial
    - Fundações: Estacas de 45 metros de profundidade

    O projeto envolveu estudos ambientais detalhados e tecnologias inovadoras de construção 
    que minimizaram o impacto no ecossistema local.`,
    featured: true
  },
  {
    id: 'centro-comercial-atlantico',
    title: 'Centro Comercial Atlântico',
    summary: 'Shopping center moderno com foco na experiência do cliente',
    location: 'Porto, Portugal',
    type: 'Edifício Comercial',
    year: 2023,
    cover: '/images/projects/centro-atlantico-1.jpg',
    images: [
      '/images/projects/centro-atlantico-1.jpg',
      '/images/projects/centro-atlantico-2.jpg',
      '/images/projects/centro-atlantico-3.jpg',
      '/images/projects/centro-atlantico-4.jpg',
      '/images/projects/centro-atlantico-5.jpg'
    ],
    description: `O Centro Comercial Atlântico redefine a experiência de compras no Porto. 
    Com design inovador e tecnologia de ponta, o projeto combina funcionalidade e estética 
    em perfeita harmonia.

    **Destaques do projeto:**
    - Área total: 45.000 m²
    - 150 lojas distribuídas em 3 pisos
    - Cinema multiplex com 12 salas
    - Praça de alimentação gourmet
    - Estacionamento para 1.200 veículos
    - Sistema de iluminação LED inteligente

    A construção utilizou técnicas modernas de pré-fabricação, reduzindo o tempo de obra 
    e garantindo precisão milimétrica em todos os acabamentos.`,
    featured: false
  },
  {
    id: 'hospital-regional-norte',
    title: 'Hospital Regional Norte',
    summary: 'Complexo hospitalar de alta complexidade',
    location: 'Braga, Portugal',
    type: 'Infraestrutura de Saúde',
    year: 2021,
    cover: '/images/projects/hospital-norte-1.jpg',
    images: [
      '/images/projects/hospital-norte-1.jpg',
      '/images/projects/hospital-norte-2.jpg',
      '/images/projects/hospital-norte-3.jpg'
    ],
    description: `Um projeto de grande importância social, o Hospital Regional Norte atende 
    a uma população de mais de 500.000 habitantes da região norte de Portugal.

    **Capacidade e instalações:**
    - 400 leitos distribuídos em 8 andares
    - 12 salas cirúrgicas de última geração
    - UTI com 40 leitos
    - Centro de diagnóstico por imagem completo
    - Heliporto para emergências
    - Sistema de ar condicionado com filtros HEPA

    O projeto seguiu rigorosamente as normas internacionais para construção hospitalar, 
    incorporando redundâncias em todos os sistemas críticos.`,
    featured: true
  },
  {
    id: 'condominio-quintas-douro',
    title: 'Condomínio Quintas do Douro',
    summary: 'Residencial de luxo com vista para o Rio Douro',
    location: 'Vila Nova de Gaia, Portugal',
    type: 'Condomínio Residencial',
    year: 2022,
    cover: '/images/projects/quintas-douro-1.jpg',
    images: [
      '/images/projects/quintas-douro-1.jpg',
      '/images/projects/quintas-douro-2.jpg',
      '/images/projects/quintas-douro-3.jpg',
      '/images/projects/quintas-douro-4.jpg'
    ],
    description: `Localizado em uma das regiões mais prestigiadas de Vila Nova de Gaia, 
    o Condomínio Quintas do Douro oferece residências de luxo com vista panorâmica para o rio.

    **Características exclusivas:**
    - 32 moradias distribuídas em 5 hectares
    - Piscina infinity com vista para o Douro
    - Campo de ténis privativo
    - Spa e ginásio exclusivos
    - Segurança 24 horas
    - Jardins paisagísticos premiados

    Cada moradia foi projetada individualmente, respeitando as características naturais 
    do terreno e maximizando as vistas privilegiadas.`,
    featured: false
  },
  {
    id: 'campus-universitario-aveiro',
    title: 'Campus Universitário de Aveiro',
    summary: 'Modernização e expansão do campus universitário',
    location: 'Aveiro, Portugal',
    type: 'Infraestrutura Educacional',
    year: 2023,
    cover: '/images/projects/campus-aveiro-1.jpg',
    images: [
      '/images/projects/campus-aveiro-1.jpg',
      '/images/projects/campus-aveiro-2.jpg',
      '/images/projects/campus-aveiro-3.jpg',
      '/images/projects/campus-aveiro-4.jpg'
    ],
    description: `Projeto de expansão e modernização do Campus Universitário de Aveiro, 
    criando espaços inovadores para pesquisa e ensino superior.

    **Novos espaços construídos:**
    - Biblioteca central com 5.000 m²
    - Laboratórios de pesquisa de ponta
    - Auditório para 800 pessoas
    - Residência estudantil para 300 alunos
    - Centro de convenções multiuso
    - Espaços de coworking e inovação

    O projeto foi desenvolvido em parceria com arquitetos renomados, criando uma 
    identidade visual moderna que dialoga com a arquitetura existente.`,
    featured: true
  }
]

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByType(type: string): Project[] {
  return projects.filter(project => project.type === type)
}