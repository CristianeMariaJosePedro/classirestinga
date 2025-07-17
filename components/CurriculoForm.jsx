import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { X, FileText, Plus, Trash2 } from 'lucide-react'

const CurriculoForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    dadosPessoais: {
      nome: '',
      telefone: '',
      email: '',
      endereco: '',
      dataNascimento: '',
      estadoCivil: ''
    },
    objetivo: '',
    experiencias: [
      {
        empresa: '',
        cargo: '',
        periodo: '',
        descricao: ''
      }
    ],
    formacao: [
      {
        instituicao: '',
        curso: '',
        periodo: '',
        status: ''
      }
    ],
    habilidades: '',
    cursos: ''
  })

  const handleInputChange = (section, field, value, index = null) => {
    setFormData(prev => {
      if (index !== null) {
        // Para arrays (experiências, formação)
        const newArray = [...prev[section]]
        newArray[index] = { ...newArray[index], [field]: value }
        return { ...prev, [section]: newArray }
      } else if (section === 'dadosPessoais') {
        // Para dados pessoais
        return {
          ...prev,
          dadosPessoais: { ...prev.dadosPessoais, [field]: value }
        }
      } else {
        // Para campos simples
        return { ...prev, [field]: value }
      }
    })
  }

  const addExperiencia = () => {
    setFormData(prev => ({
      ...prev,
      experiencias: [...prev.experiencias, { empresa: '', cargo: '', periodo: '', descricao: '' }]
    }))
  }

  const removeExperiencia = (index) => {
    setFormData(prev => ({
      ...prev,
      experiencias: prev.experiencias.filter((_, i) => i !== index)
    }))
  }

  const addFormacao = () => {
    setFormData(prev => ({
      ...prev,
      formacao: [...prev.formacao, { instituicao: '', curso: '', periodo: '', status: '' }]
    }))
  }

  const removeFormacao = (index) => {
    setFormData(prev => ({
      ...prev,
      formacao: prev.formacao.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do currículo:', formData)
    alert('Currículo criado com sucesso!')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-orange-600" />
              Criar Currículo
            </CardTitle>
            <CardDescription>
              Preencha seus dados para criar um currículo profissional
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dados Pessoais */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input
                    id="nome"
                    value={formData.dadosPessoais.nome}
                    onChange={(e) => handleInputChange('dadosPessoais', 'nome', e.target.value)}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    value={formData.dadosPessoais.telefone}
                    onChange={(e) => handleInputChange('dadosPessoais', 'telefone', e.target.value)}
                    required
                    placeholder="(16) 99999-9999"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.dadosPessoais.email}
                    onChange={(e) => handleInputChange('dadosPessoais', 'email', e.target.value)}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                  <Input
                    id="dataNascimento"
                    type="date"
                    value={formData.dadosPessoais.dataNascimento}
                    onChange={(e) => handleInputChange('dadosPessoais', 'dataNascimento', e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    id="endereco"
                    value={formData.dadosPessoais.endereco}
                    onChange={(e) => handleInputChange('dadosPessoais', 'endereco', e.target.value)}
                    placeholder="Rua, número, bairro, cidade"
                  />
                </div>
              </div>
            </div>

            {/* Objetivo */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Objetivo Profissional</h3>
              <Textarea
                value={formData.objetivo}
                onChange={(e) => handleInputChange(null, 'objetivo', e.target.value)}
                placeholder="Descreva seu objetivo profissional..."
                rows={3}
              />
            </div>

            {/* Experiências */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Experiência Profissional</h3>
                <Button type="button" onClick={addExperiencia} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar
                </Button>
              </div>
              {formData.experiencias.map((exp, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-medium">Experiência {index + 1}</h4>
                      {formData.experiencias.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeExperiencia(index)}
                          size="sm"
                          variant="ghost"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Empresa</Label>
                        <Input
                          value={exp.empresa}
                          onChange={(e) => handleInputChange('experiencias', 'empresa', e.target.value, index)}
                          placeholder="Nome da empresa"
                        />
                      </div>
                      <div>
                        <Label>Cargo</Label>
                        <Input
                          value={exp.cargo}
                          onChange={(e) => handleInputChange('experiencias', 'cargo', e.target.value, index)}
                          placeholder="Cargo ocupado"
                        />
                      </div>
                      <div>
                        <Label>Período</Label>
                        <Input
                          value={exp.periodo}
                          onChange={(e) => handleInputChange('experiencias', 'periodo', e.target.value, index)}
                          placeholder="Ex: Jan/2020 - Dez/2022"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label>Descrição das Atividades</Label>
                      <Textarea
                        value={exp.descricao}
                        onChange={(e) => handleInputChange('experiencias', 'descricao', e.target.value, index)}
                        placeholder="Descreva suas principais atividades e responsabilidades..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formação */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Formação Acadêmica</h3>
                <Button type="button" onClick={addFormacao} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar
                </Button>
              </div>
              {formData.formacao.map((form, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-medium">Formação {index + 1}</h4>
                      {formData.formacao.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeFormacao(index)}
                          size="sm"
                          variant="ghost"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Instituição</Label>
                        <Input
                          value={form.instituicao}
                          onChange={(e) => handleInputChange('formacao', 'instituicao', e.target.value, index)}
                          placeholder="Nome da instituição"
                        />
                      </div>
                      <div>
                        <Label>Curso</Label>
                        <Input
                          value={form.curso}
                          onChange={(e) => handleInputChange('formacao', 'curso', e.target.value, index)}
                          placeholder="Nome do curso"
                        />
                      </div>
                      <div>
                        <Label>Período</Label>
                        <Input
                          value={form.periodo}
                          onChange={(e) => handleInputChange('formacao', 'periodo', e.target.value, index)}
                          placeholder="Ex: 2018 - 2022"
                        />
                      </div>
                      <div>
                        <Label>Status</Label>
                        <select
                          value={form.status}
                          onChange={(e) => handleInputChange('formacao', 'status', e.target.value, index)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Selecione</option>
                          <option value="concluido">Concluído</option>
                          <option value="cursando">Cursando</option>
                          <option value="incompleto">Incompleto</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Habilidades */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Habilidades e Competências</h3>
              <Textarea
                value={formData.habilidades}
                onChange={(e) => handleInputChange(null, 'habilidades', e.target.value)}
                placeholder="Liste suas principais habilidades, conhecimentos técnicos, idiomas..."
                rows={4}
              />
            </div>

            {/* Cursos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Cursos e Certificações</h3>
              <Textarea
                value={formData.cursos}
                onChange={(e) => handleInputChange(null, 'cursos', e.target.value)}
                placeholder="Liste cursos, certificações, workshops..."
                rows={3}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 bg-orange-600 hover:bg-orange-700">
                Criar Currículo
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CurriculoForm

