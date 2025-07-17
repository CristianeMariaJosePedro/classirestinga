import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { X, Upload, Wrench } from 'lucide-react'

const ServicoForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nomeServico: '',
    prestador: '',
    descricao: '',
    telefone: '',
    email: '',
    endereco: '',
    categoria: '',
    preco: '',
    disponibilidade: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio dos dados
    console.log('Dados do serviço:', formData)
    alert('Serviço cadastrado com sucesso!')
    onClose()
    // Reset form
    setFormData({
      nomeServico: '',
      prestador: '',
      descricao: '',
      telefone: '',
      email: '',
      endereco: '',
      categoria: '',
      preco: '',
      disponibilidade: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-green-600" />
              Anunciar Serviço
            </CardTitle>
            <CardDescription>
              Divulgue seu serviço para a comunidade da Restinga
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nomeServico">Nome do Serviço *</Label>
                <Input
                  id="nomeServico"
                  name="nomeServico"
                  value={formData.nomeServico}
                  onChange={handleInputChange}
                  required
                  placeholder="Ex: Corte de Cabelo Masculino"
                />
              </div>
              <div>
                <Label htmlFor="prestador">Nome do Prestador *</Label>
                <Input
                  id="prestador"
                  name="prestador"
                  value={formData.prestador}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome ou nome da empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="categoria">Categoria *</Label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="beleza">Beleza e Estética</option>
                  <option value="reparos">Reparos e Manutenção</option>
                  <option value="domesticos">Serviços Domésticos</option>
                  <option value="construcao">Construção e Reforma</option>
                  <option value="eletrica">Elétrica</option>
                  <option value="hidraulica">Hidráulica</option>
                  <option value="jardinagem">Jardinagem</option>
                  <option value="limpeza">Limpeza</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="educacao">Educação e Aulas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div>
                <Label htmlFor="preco">Preço (opcional)</Label>
                <Input
                  id="preco"
                  name="preco"
                  value={formData.preco}
                  onChange={handleInputChange}
                  placeholder="Ex: R$ 25,00 ou A combinar"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="descricao">Descrição do Serviço *</Label>
              <Textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                required
                placeholder="Descreva detalhadamente o serviço oferecido, experiência, diferenciais..."
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  placeholder="(16) 99999-9999"
                />
              </div>
              <div>
                <Label htmlFor="email">Email (opcional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="endereco">Endereço de Atendimento *</Label>
              <Input
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                required
                placeholder="Bairro ou região onde atende"
              />
            </div>

            <div>
              <Label htmlFor="disponibilidade">Disponibilidade</Label>
              <Input
                id="disponibilidade"
                name="disponibilidade"
                value={formData.disponibilidade}
                onChange={handleInputChange}
                placeholder="Ex: Segunda a sexta, 8h às 18h"
              />
            </div>

            <div>
              <Label>Fotos do Trabalho</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Adicione fotos dos seus trabalhos</p>
                <p className="text-sm text-gray-500">PNG, JPG até 5MB cada</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                Anunciar Serviço
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

export default ServicoForm

