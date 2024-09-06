import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = true;
  readonly panelOpenState = signal(false);

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  isDivVisible: boolean = false;

  showDiv() {
    this.isDivVisible = true;
  }

  hideDiv() {
    this.isDivVisible = false;
  }

  visibleIndex: number | null = null;

  // Cada item agora tem um nome e uma lista de links
  items = [
    {
      name: 'ATRACAÇÃO E ANCORAGEM',
      links: [
        'Âncoras', 'Âncoras Galvanizadas', 'Âncoras Inox', 'Cabos', 'Cabo Retinida',
        'Cabo Torcido', 'Cabo Trançado', 'Correntes', 'Acessórios Para Corrente', 'Corrente Inox', 'Correntes Galvanizadas',
        'Defensas e Boias', 'Boias', 'Capas Para Defensa', 'Defensas', 'Porta Defensa',
        'Guinchos', 'Acessórios Para Guinchos', 'Guinchos Verticais'
      ]
    },

    {
      name: 'Eletrônicos e Navegação',
      links: [
        'Antena', 'Bandeira', 'Binóculos', 'Bússola', 'Eletrônicos de Navegação', 'GPS e Sonar', 'Luzes de Navegação',
        'Luz de Alcançado', 'Luz de Ancoragem', 'Luz de Bombordo', 'Luz de Bordo', 'Luz de Cortesia', 'Luz de Mastro',
        'Luz de Pier', 'Luz de Popa', 'Luz de Top', 'Rádio', 'Som', 'Volante'
      ]
    },


    { 
      name: 'Elétrica e Iluminação', 
      links: [
        'Baterias', 'Carregadores', 'Chave de Bateria', 'Inversores', 'Pilhas',
        'Elétrica', 'Acessórios Elétricos', 'Botões Elétricos', 'Cabos Elétricos', 'Interruptores',
        'Painel Elétrico', 'Tomadas e Extensão', 'Iluminação Externa', 'Farol de Busca', 'Luz de Cortesia',
        'Luz Subaquática', 'Iluminação Interna e Cabine', 'Luminárias', 'Luz de Cabine', 'Luzes de Navegação',
        'Luz de Alcançado', 'Luz de Ancoragem', 'Luz de Mastro', 'Luz de Navegação', 'luz de Top','Luz Strobo'
      ] 
    },
    { 
      name: 'Hidráulica', 
      links: [
        'Baterias', 'Carregadores', 'Chave de Bateria', 'Inversores', 'Pilhas',
        'Elétrica', 'Acessórios Elétricos', 'Botões Elétricos', 'Cabos Elétricos', 'Interruptores',
        'Painel Elétrico', 'Tomadas e Extensão', 'Iluminação Externa', 'Farol de Busca', 'Luz de Cortesia',
        'Luz Subaquática', 'Iluminação Interna e Cabine', 'Luminárias', 'Luz de Cabine', 'Luzes de Navegação',
        'Luz de Alcançado', 'Luz de Ancoragem', 'Luz de Mastro', 'Luz de Navegação', 'luz de Top','Luz Strobo'
      ] 
    },
    { 
      name: 'Mecânica e Manutenção', 
      links: [
        'Baterias', 'Carregadores', 'Chave de Bateria', 'Inversores', 'Pilhas',
        'Elétrica', 'Acessórios Elétricos', 'Botões Elétricos', 'Cabos Elétricos', 'Interruptores',
        'Painel Elétrico', 'Tomadas e Extensão', 'Iluminação Externa', 'Farol de Busca', 'Luz de Cortesia',
        'Luz Subaquática', 'Iluminação Interna e Cabine', 'Luminárias', 'Luz de Cabine', 'Luzes de Navegação',
        'Luz de Alcançado', 'Luz de Ancoragem', 'Luz de Mastro', 'Luz de Navegação', 'luz de Top','Luz Strobo'
      ] 
    },
    { 
      name: 'Salvatagem e Segurança', 
      links: [
        'Baterias', 'Carregadores', 'Chave de Bateria', 'Inversores', 'Pilhas',
        'Elétrica', 'Acessórios Elétricos', 'Botões Elétricos', 'Cabos Elétricos', 'Interruptores',
        'Painel Elétrico', 'Tomadas e Extensão', 'Iluminação Externa', 'Farol de Busca', 'Luz de Cortesia',
        'Luz Subaquática', 'Iluminação Interna e Cabine', 'Luminárias', 'Luz de Cabine', 'Luzes de Navegação',
        'Luz de Alcançado', 'Luz de Ancoragem', 'Luz de Mastro', 'Luz de Navegação', 'luz de Top','Luz Strobo'
      ] 
    },
    { 
      name: 'Esportes e Lazer', 
      links: [
        'Baterias', 'Carregadores', 'Chave de Bateria', 'Inversores', 'Pilhas',
        'Elétrica', 'Acessórios Elétricos', 'Botões Elétricos', 'Cabos Elétricos', 'Interruptores',
        'Painel Elétrico', 'Tomadas e Extensão', 'Iluminação Externa', 'Farol de Busca', 'Luz de Cortesia',
        'Luz Subaquática', 'Iluminação Interna e Cabine', 'Luminárias', 'Luz de Cabine', 'Luzes de Navegação',
        'Luz de Alcançado', 'Luz de Ancoragem', 'Luz de Mastro', 'Luz de Navegação', 'luz de Top','Luz Strobo'
      ] 
    },
    { 
      name: 'Pesca', 
      links: [
        'Baterias', 'Carregadores', 'Chave de Bateria', 'Inversores', 'Pilhas',
        'Elétrica', 'Acessórios Elétricos', 'Botões Elétricos', 'Cabos Elétricos', 'Interruptores',
        'Painel Elétrico', 'Tomadas e Extensão', 'Iluminação Externa', 'Farol de Busca', 'Luz de Cortesia',
        'Luz Subaquática', 'Iluminação Interna e Cabine', 'Luminárias', 'Luz de Cabine', 'Luzes de Navegação',
        'Luz de Alcançado', 'Luz de Ancoragem', 'Luz de Mastro', 'Luz de Navegação', 'luz de Top','Luz Strobo'
      ] 
    },
  ];

  toggleVisibility(index: number) {
    this.visibleIndex = index;
  }

  clearVisibility(index: number) {
    if (this.visibleIndex === index) {
      this.visibleIndex = null;
    }
  }

}
