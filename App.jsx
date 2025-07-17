import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Home, 
  Info, 
  Building2, 
  Wrench, 
  Briefcase, 
  FileText, 
  DollarSign, 
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  Star,
  Users,
  Search,
  Menu,
  X
} from 'lucide-react'
import EmpresaForm from './components/EmpresaForm.jsx'
import ServicoForm from './components/ServicoForm.jsx'
import CurriculoForm from './components/CurriculoForm.jsx'
import './App.css'

// Importando as imagens
import comunidadeImg from './assets/images/PYb0lEcfE4FC.png'
import pessoasInteragindoImg from './assets/images/5u4gkGbDcUCu.jpg'
import empresaImg from './assets/images/hBl18oxp96AE.jpg'
import servicosImg from './assets/images/AbjreeaJPees.png'
import empregosImg from './assets/images/2IvoxwHTXYKN.png'
import curriculoImg from './assets/images/cUePrfiLrPTb.jpg'
import precosImg from './assets/images/Q5Gc2QfJhDoA.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isEmpresaFormOpen, setIsEmpresaFormOpen] = React.useState(false)
  const [isServicoFormOpen, setIsServicoFormOpen] = React.useState(false)
  const [isCurriculoFormOpen, setIsCurriculoFormOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5516994454641', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Home className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold text-blue-800">ClassiRestinga</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#empresas" className="text-gray-700 hover:text-blue-600 transition-colors">Empresas</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#empregos" className="text-gray-700 hover:text-blue-600 transition-colors">Empregos</a>
              <a href="#curriculo" className="text-gray-700 hover:text-blue-600 transition-colors">Currículo</a>
              <a href="#precos" className="text-gray-700 hover:text-blue-600 transition-colors">Preços</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-2">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Início</a>
                <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Sobre</a>
                <a href="#empresas" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Empresas</a>
                <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Serviços</a>
                <a href="#empregos" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Empregos</a>
                <a href="#curriculo" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Currículo</a>
                <a href="#precos" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Preços</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Contato</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Bem-vindo ao ClassiRestinga
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sua plataforma completa de classificados da Restinga. Conectamos empresas, prestadores de serviços e pessoas em busca de oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Search className="mr-2 h-5 w-5" />
              Buscar Serviços
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsEmpresaFormOpen(true)}>
              <Building2 className="mr-2 h-5 w-5" />
              Anunciar Empresa
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src={comunidadeImg} alt="Comunidade Local" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Comunidade Local</h3>
              <p className="text-gray-600">Fortalecendo os laços da nossa comunidade</p>
            </div>
            <div className="text-center">
              <img src={pessoasInteragindoImg} alt="Pessoas Interagindo" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Conexões Reais</h3>
              <p className="text-gray-600">Facilitando encontros e parcerias</p>
            </div>
            <div className="text-center">
              <img src={empresaImg} alt="Empresas" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Negócios Locais</h3>
              <p className="text-gray-600">Impulsionando a economia regional</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre o ClassiRestinga</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O ClassiRestinga é uma plataforma digital criada especialmente para fortalecer a economia local da Restinga, 
              conectando empresas, prestadores de serviços e pessoas em busca de oportunidades de trabalho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Empresas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Divulgue sua empresa e alcance mais clientes na região</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Encontre ou ofereça serviços locais de qualidade</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>Empregos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Oportunidades de trabalho atualizadas diariamente</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle>Currículos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Crie e gerencie seu currículo profissional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section id="empresas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Empresas</h2>
            <p className="text-lg text-gray-600">Divulgue sua empresa e alcance novos clientes</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img src={empresaImg} alt="Empresas" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Classificados para Empresas</h3>
              <p className="text-gray-600 mb-6">
                Cadastre sua empresa em nossa plataforma e tenha visibilidade na comunidade da Restinga. 
                Inclua informações completas, imagens e dados de contato para atrair mais clientes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Divulgação completa da empresa
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Galeria de imagens
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Informações de contato
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsEmpresaFormOpen(true)}>
                Cadastrar Empresa
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Serviços</h2>
            <p className="text-lg text-gray-600">Prestação de serviços locais de qualidade</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Classificados de Serviços</h3>
              <p className="text-gray-600 mb-6">
                Divulgue seus serviços profissionais ou encontre o prestador ideal para suas necessidades. 
                Barbeiros, eletricistas, encanadores e muito mais.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Wrench className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">Reparos</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold">Beleza</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold">Domésticos</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Building2 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold">Construção</p>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700" onClick={() => setIsServicoFormOpen(true)}>
                Anunciar Serviço
              </Button>
            </div>
            <div>
              <img src={servicosImg} alt="Serviços" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="empregos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Empregos</h2>
            <p className="text-lg text-gray-600">Oportunidades de trabalho atualizadas diariamente</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img src={empregosImg} alt="Empregos" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vagas de Emprego</h3>
              <p className="text-gray-600 mb-6">
                Encontre as melhores oportunidades de trabalho na região da Restinga. 
                Vagas atualizadas diariamente em diversas áreas profissionais.
              </p>
              <div className="space-y-3 mb-6">
                <Badge variant="secondary" className="mr-2">Vendas</Badge>
                <Badge variant="secondary" className="mr-2">Administração</Badge>
                <Badge variant="secondary" className="mr-2">Serviços Gerais</Badge>
                <Badge variant="secondary" className="mr-2">Técnico</Badge>
                <Badge variant="secondary" className="mr-2">Atendimento</Badge>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Ver Vagas Disponíveis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculo" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Currículo</h2>
            <p className="text-lg text-gray-600">Crie e gerencie seu currículo profissional</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Criação de Currículo</h3>
              <p className="text-gray-600 mb-6">
                Crie um currículo profissional e atrativo com nossa ferramenta online. 
                Disponibilize seu perfil para empresas da região encontrarem você.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Modelos profissionais
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Editor fácil de usar
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Download em PDF
                </li>
                <li className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Perfil online
                </li>
              </ul>
              <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => setIsCurriculoFormOpen(true)}>
                Criar Currículo
              </Button>
            </div>
            <div>
              <img src={curriculoImg} alt="Currículo" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="precos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Preços</h2>
            <p className="text-lg text-gray-600">Planos acessíveis para empresas e prestadores de serviços</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription>Para prestadores individuais</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">R$ 29/mês</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    1 anúncio de serviço
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Até 3 imagens
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Contato direto
                  </li>
                </ul>
                <Button className="w-full mt-6">Escolher Plano</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-500 border-2">
              <CardHeader>
                <Badge className="mb-2">Mais Popular</Badge>
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <CardDescription>Para pequenas empresas</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">R$ 59/mês</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    5 anúncios
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Até 10 imagens
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Destaque nos resultados
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Estatísticas básicas
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Escolher Plano</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Empresarial</CardTitle>
                <CardDescription>Para grandes empresas</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">R$ 99/mês</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Anúncios ilimitados
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Imagens ilimitadas
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Prioridade máxima
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Relatórios detalhados
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    Suporte prioritário
                  </li>
                </ul>
                <Button className="w-full mt-6">Escolher Plano</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl">Estamos aqui para ajudar você a crescer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-blue-100">(16) 99445-4641</p>
            </div>
            
            <div>
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-blue-100">(16) 99445-4641</p>
            </div>
            
            <div>
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">contato@classirestinga.com.br</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" onClick={openWhatsApp}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">ClassiRestinga</h3>
              </div>
              <p className="text-gray-400">
                Conectando a comunidade da Restinga através de classificados locais.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#empresas" className="hover:text-white transition-colors">Empresas</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#empregos" className="hover:text-white transition-colors">Empregos</a></li>
                <li><a href="#curriculo" className="hover:text-white transition-colors">Currículo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (16) 99445-4641
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contato@classirestinga.com.br
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Restinga, Porto Alegre - RS
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ClassiRestinga. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Formulários Modais */}
      <EmpresaForm 
        isOpen={isEmpresaFormOpen} 
        onClose={() => setIsEmpresaFormOpen(false)} 
      />
      <ServicoForm 
        isOpen={isServicoFormOpen} 
        onClose={() => setIsServicoFormOpen(false)} 
      />
      <CurriculoForm 
        isOpen={isCurriculoFormOpen} 
        onClose={() => setIsCurriculoFormOpen(false)} 
      />
    </div>
  )
}

export default App

