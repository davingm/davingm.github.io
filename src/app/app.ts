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
    { label: 'Site', url: 'https://davingm.com' },
  ];

  bio = {
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
      period: 'Juni 2025 – Sekarang',
    }
  ];

  educations = [
    {
      degree: 'SMK Assalaam Bandung',
      institution: 'Pengembangan Perangkat Lunak dan Gim',
      period: '2024 – Sekarang',
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
      title: 'PKL',
      org: 'PT. Digital Amore Kriyanesia',
      period: 'Maret 2026 – Juni 2026',
    },
  ];

  languages = [
    { name: 'Bahasa Indonesia', level: 'penutur asli' },
  ];

  skills = [
    'Nuxt.js',
    'TypeScript',
    'Vuejs',
    'Tailwind CSS',
    'Once UI',
    'Reka UI',
    'GSAP',
    'Eslint',
    'Nuxt UI',
  ];

  memberships = [
    { name: 'Developer Program Member NLFTs', period: '2025 – Sekarang' },
  ];
}
