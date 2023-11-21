import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  libros = [
    {
      nombre:'12 reglas para vivir',
      autor:'Jordan B. Peterson',
      genero:'Autoayuda',
      editorial:'Planeta',
      anio:2018,
      comentarios:'conocer las reglas escenciales para vivir que todos debemos conocer'
    },
    {
      nombre:'El poder para lograr lo que quieras',
      autor:'Leopoldo Alcalá',
      genero:'Autoayuda',
      editorial:'www.elpoderparalograr.com',
      anio:2003,
      comentarios:'Herramientas y conocimientos presentados por Leopoldo Alcalá'
    },
    {
      nombre:'Método TED para hablar en público',
      autor:'Jeremy Donovan',
      genero:'Autoayuda',
      editorial:'Ariel',
      anio:2014,
      comentarios:'Los secretos de las conferencias que triunfan en todo el mundo'
    },
    {
      nombre:'Concentrate | Deep work',
      autor:'Carl Newport',
      genero:'Autoayuda',
      editorial:'Peninsula',
      anio:2022,
      comentarios:'las cuatro reglas para el exito en la era de la distracción'
    },
    {
      nombre:'Las mil y una noche',
      autor:'anonimo',
      genero:'Historias y fantasias',
      editorial:'Planeta',
      anio:0,
      comentarios:'QUE LAS LEYENDAS DE LOS ANTIGUOS SEAN UNA LECCIÓN PARA LOS MODERNOS, FIN DE QUE EL HOMBRE APRENDA EN LOS SUCESOS QUE OCURREN A OTROS QUE NO SON ÉL. ENTONCES RESPETARÁ Y COMPARARÁ CON ATENCIÓN LAS PALABRAS DE LOS PUEBLOS PASADOS Y LO QUE A ÉL LE OCURRA, Y SE REPRIMIRÁ.'
    },
    {
      nombre:'Actitud de vencedor',
      autor:'John C. Maxwell',
      genero:'Autoayuda',
      editorial:'Caribe',
      anio:1997,
      comentarios:'La clave del exito personal'
    },
    {
      nombre:'Aprende como Einstein',
      autor:'Steve Allen',
      genero:'Autoayuda',
      editorial:'Steve Allen',
      anio:2017,
      comentarios:'Técnicas de aprendisaje acelerado y lectura efectiva para pensar como un genio'
    },
    {
      nombre:'Aqui no hay reglas',
      autor:'Reed Hastings y Erin Meyer',
      genero:'Autoayuda',
      editorial:'Conecta',
      anio:2019,
      comentarios:'NETFLIX y la cultura del areinvención'
    },
    {
      nombre:'Aprende como Einstein',
      autor:'Steve Allen',
      genero:'Autoayuda',
      editorial:'Steve Allen',
      anio:2017,
      comentarios:'Técnicas de aprendisaje acelerado y lectura efectiva para pensar como un genio'
    },
    {
      nombre:'El poder de la voluntad',
      autor:'w.w.atkinson',
      genero:'Autoayuda',
      editorial:'solita',
      anio:1987,
      comentarios:'Técnicas de aprendisaje acelerado y lectura efectiva para pensar como un genio'
    },
    {
      nombre:'Burlar al Diablo',
      autor:'Napoleón Hill',
      genero:'Autoayuda',
      editorial:'Quarzo',
      anio:1938,
      comentarios:'Este libro ofrece las claves para que cada uno de nosotros burlemos al Diablo en nuestras propias vidas. Nos enseña trazar un plan de acción para lograrlo y para agregarle valor al mundo que nos rodea durante el proceso.'
    }
  ]
}
