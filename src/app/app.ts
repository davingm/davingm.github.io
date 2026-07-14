import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'Kinn';
  age = "#3";
  pronouns = 'he/him';
  location = 'Bandung, Indonesia';

  roles = [
    { label: 'Frontend Developer @nlfts', url: 'https://nlfts.dev' },
    { label: 'Nuxt Specialist', url: 'https://nuxt.com' },
  ];

  socialLinks = [
    { label: 'GitHub', url: 'https://github.com/davingm' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/davingm' },
    { label: 'Email', url: 'mailto:davin@nlfts.dev' },
    { label: 'Blog', url: 'https://davingm.com' },
  ];

  bio = {
    nama: 'davingm biasa di panggil kinn, seorang',
    highlight1: 'Passionate frontend developer',
    text1: ' yang berfokus pada pengembangan web modern dengan Nuxt dan Vuejs.',
    highlight2: 'Desainer UI/UX',
    text2: ', selalu mencari cara untuk membuat antarmuka yang indah dan fungsional.',
    text3:
      'Tertarik pada hal-hal baru. Selalu belajar dan berkembang setiap harinya.',
  };

  experiences = [
    {
      title: 'Frontend Developer',
      company: 'NLFTs Company',
      period: 'Juni 2024 – Sekarang',
    },
    {
      title: 'DevOps Engineer',
      company: 'rakitweb indonesia',
      period: 'Maret 2026 – Sekarang',
    },
  ];

  activities = [
    {
      title: 'Anggota Aktif',
      org: 'GRANTARA Indonesia',
      period: 'Sep 2022 – Sekarang',
    },
    {
      title: 'Kontributor',
      org: 'Open Source Nuxtjs',
      period: 'Mar 2026 – Sekarang',
    },
    {
      title: 'Oprational Team',
      org: 'rakitweb indonesia',
      period: 'Maret 2026 – Juni 2026',
    }
  ];

  languages = [
    { name: 'Bahasa Indonesia', level: 'penutur asli' },
    { name: 'English', level: 'penutur menengah' },
  ];

  skills = [
    { name: 'Nuxt.js', icon: 'https://cdn.simpleicons.org/nuxt/00C58E', color: '#00C58E' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6' },
    { name : 'Sass', icon:'https://cdn.simpleicons.org/sass/CC6699', color:'#CC6699'},
    { name: 'Vuejs', icon: 'https://cdn.simpleicons.org/vue.js/4FC08D', color: '#4FC08D' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
    { name: 'Once UI', icon: 'once-ui.svg', color: '#1A1A1A' },
    { name: 'Reka UI', icon: 'reka-ui.svg', color: '#16A353' },
    { name: 'GSAP', icon: 'https://cdn.simpleicons.org/greensock/88CE02', color: '#88CE02' },
    { name: 'Eslint', icon: 'https://cdn.simpleicons.org/eslint/4B32C3', color: '#4B32C3' },
  ];

  memberships = [
    { name: 'Developer Program Member NLFTs', period: '2025 – Sekarang' },
  ];
}
