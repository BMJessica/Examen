import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
  origen?: string;
  cuidados?: string;
  descripcionLarga?: string; // solo para el modal

}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Rosas',
      descripcion : 'Ideal para darle color a tu jardín',
      descripcionLarga: 'Las rosas son flores ornamentales con una gran variedad de colores. Se utilizan comúnmente en arreglos florales y simbolizan amor y belleza.',
      precio: 60,
      imagen: '/img/r.webp',
      origen: 'Asia',
      cuidados: 'Regar dos veces por semana, podar en invierno'
    },
    {
      id: 2,
      nombre: 'Tulipanes',
      descripcion: 'Brillante y colorida',
      descripcionLarga: 'Los tulipanes o tulipa son también todo un género de plantas, en este caso de tipo bulboso y perenne',
      precio: 90,
      imagen: '/img/tuli.webp',
      origen: 'Asia',
      cuidados: 'Regar dos veces por semana, podar en invierno'
    },
    {
      "id": 3,
      "nombre": "Girasoles",
      "descripcion": "De todos los colores",
      "descripcionLarga": "Los girasoles, pertenecientes al género *Helianthus*, son plantas herbáceas conocidas por sus grandes flores amarillas que siguen la luz del sol. Son apreciados por su belleza y por sus semillas comestibles.",
      "precio": 85,
      "imagen": "/img/g.webp",
      "origen": "América del Norte",
      "cuidados": "Regar moderadamente, necesitan exposición directa al sol"
    },
    {
      "id": 4,
      "nombre": "Orquídeas",
      "descripcion": "La más armoniosa y perfecta",
      "descripcionLarga": "Las orquídeas, de la familia *Orchidaceae*, son flores exóticas y elegantes con una impresionante diversidad de especies. Son apreciadas por su simetría y colores vibrantes, además de su delicado perfume.",
      "precio": 50,
      "imagen": "/img/o.webp",
      "origen": "Regiones tropicales y subtropicales de todo el mundo",
      "cuidados": "Riego ligero, alta humedad, evitar exposición directa al sol"
    },
    {
      "id": 5,
      "nombre": "Pensamientos",
      "descripcion": "Brillante y colorida",
      "descripcionLarga": "Los pensamientos (*Viola tricolor*) son flores pequeñas y vibrantes, muy usadas en jardinería. Su amplia gama de colores y resistencia a climas fríos los hacen una opción popular para la decoración.",
      "precio": 90,
      "imagen": "/img/p.webp",
      "origen": "Europa y Asia",
      "cuidados": "Regar regularmente, toleran el frío, prefieren sombra parcial"
    },
    {
      "id": 6,
      "nombre": "Margaritas",
      "descripcion": "De todos los colores",
      "descripcionLarga": "Las margaritas (*Bellis perennis*) son flores simples pero encantadoras, con pétalos blancos rodeando un centro amarillo. Son símbolo de pureza e inocencia, muy comunes en jardines y praderas.",
      "precio": 85,
      "imagen": "/img/ma.webp",
      "origen": "Europa",
      "cuidados": "Riego moderado, mucha luz, poda ocasional"
    },
    {
      "id": 7,
      "nombre": "Lirios",
      "descripcion": "La más armoniosa y perfecta",
      "descripcionLarga": "Los lirios (*Lilium*) son flores majestuosas con pétalos delicados y fragancia intensa. Se presentan en una amplia variedad de colores y se asocian con la pureza y la nobleza.",
      "precio": 50,
      "imagen": "/img/l.webp",
      "origen": "Asia y Europa",
      "cuidados": "Riego constante, suelo bien drenado, exposición al sol parcial"
    },
    {
      "id": 8,
      "nombre": "Azaleas",
      "descripcion": "La más armoniosa y perfecta",
      "descripcionLarga": "Las azaleas (*Rhododendron*) son arbustos florales con una gran variedad de colores y formas. Son muy populares en jardinería por su exuberante floración en primavera.",
      "precio": 50,
      "imagen": "/img/a.webp",
      "origen": "Asia y América del Norte",
      "cuidados": "Riego frecuente, suelo ácido, sombra parcial"
    }
]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
  
}
