# Devgiri Residency - Website

A modern, responsive, and premium single-page website built for the **Devgiri Residency** lodge.

## Folder Structure
```
Devagiri-Residency/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── hero.png         (Main Hero banner image)
        ├── gallery-1.png    (Reception Lobby / About image)
        ├── gallery-2.png    (Deluxe Room)
        ├── gallery-3.png    (Standard Room / Bathroom)
        ├── gallery-4.png    (Parking)
        ├── gallery-5.png    (Balcony View / Environment)
        ├── gallery-6.png    (Lobby Sitting Area)
        └── gallery-7.png    (Lobby Corridor)
```

## Image Mapping Reference
To use your exact photos on the website, download the images from the links below and save them in `assets/images/` using the specified filenames:

| Filename | Google Photos Source URL | Description / Location |
| :--- | :--- | :--- |
| **hero.png** | [Google Photos Link](https://photos.google.com/photo/AF1QipNOUebw-PDuJuGq14G8QRbpjaWpMhyX-hCGCdZH) | Main hero/banner image |
| **gallery-1.png** | [Google Photos Link](https://photos.google.com/photo/AF1QipM7tFChUIBC3JFwnGn__CXDJwnmhtcNK67q8IRf) | About section & first gallery image |
| **gallery-2.png** | [Google Photos Link](https://photos.google.com/photo/AF1QipOiggj8eGHbqgKthrxddz_ihNklfwkwa4PXIWYO) | Deluxe Room image |
| **gallery-3.png** | [Google Photos Link](https://photos.google.com/photo/AF1QipOr4THmsIuMnk4v0uQqh9meC8QfxwEf9MOwc5ac) | Standard Room image |
| **gallery-4.png** | [Google Photos Link](https://photos.google.com/photo/AF1QipOGMbxmEyCBq1bZdAgDuDs46zhHkFmp98nNJ0qS) | Parking Available |
| **gallery-5.png** | [Google Photos Link](https://photos.google.com/photo/AF1QipPtXM29g9B42aj-hLCQU9UUYHqYfz4nxYYi1aqJ) | Peaceful Environment |
| **gallery-6.png** | [Google Photos Link](https://photos.google.com/photo/AF1QipOQljpfyfEFL5tqwAE4MULRNG8DJBs84SOL4ciQ) | Gallery view 6 |
| **gallery-7.png** | [Google Photos Link](https://photos.google.com/photo/AF1QipPqnp-3Th0IZyNzkHcWMp-1qO8SwU9XGrpcO4Xf) | Gallery view 7 |

## Local Development Server

To view the website locally, you can start a simple HTTP server in this directory. 

### Option 1: Using Python
If you have Python installed, open your terminal in this folder and run:
```bash
python -m http.server 8000
```
Then open your browser and navigate to: `http://localhost:8000`

### Option 2: Using Node.js (npx)
If you have Node.js installed, run:
```bash
npx serve
```
Then open the address printed in the terminal (usually `http://localhost:3000` or `http://localhost:5000`).
