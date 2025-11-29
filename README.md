# Element Builder 3D Simulation

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

An interactive, educational 3D simulation tool that allows users to construct atoms from protons, neutrons, and electrons. Explore the periodic table, visualize atomic structures, and understand chemical properties in a fully immersive 3D environment.

##  Features

###  Interactive 3D Atom Builder
*   **Dynamic Construction**: Add or remove protons, neutrons, and electrons in real-time.
*   **Visual Feedback**: Watch the atom transform instantly.
    *   **Protons**: Red spheres (Size 0.5).
    *   **Neutrons**: White spheres (Size 0.4).
    *   **Electrons**: Light Blue spheres (Size 0.2) orbiting in dynamic shells.
*   **Orbital Visualization**: See the electron shells represented as visible rings.

###  Crystal Structure Visualization
*   **Toggle View**: Switch between the single "Atom View" and the "Crystal Structure View".
*   **Real Lattice**: See how atoms arrange themselves in solids (e.g., Face-Centered Cubic, Hexagonal).
*   **Dynamic Lattice**: The crystal is built from miniature versions of *your* custom atom.
*   **Interactive Bonds**: Toggle bond visibility on/off. Bonds pulse with the element's unique color.

###  Comprehensive Element Data
*   **Full Periodic Table**: Supports all 118 elements, from Hydrogen to Oganesson.
*   **Real-time Analysis**:
    *   **Identification**: Automatically names the element based on proton count.
    *   **Stability Check**: Determines if the isotope is Stable, Radioactive, or Unstable.
    *   **Chemical Properties**: Displays Electron Configuration, Valency, and Charge.
    *   **Educational Info**: Provides descriptions, common uses, and hazards for every element.

###  Modern & Responsive UI
*   **Sci-Fi Aesthetic**: Dark mode design with bloom/glow effects and a starry background.
*   **Responsive**: Fully functional on Desktops, Tablets, and Mobile devices.

## Getting Started

### Prerequisites
*   Node.js (v14 or higher)
*   npm (v6 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Hackb07/Element_Visualizer.git
    cd Element_Visualizer
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` to start building elements!

## Built With

*   **[React](https://reactjs.org/)** - UI Framework
*   **[Three.js](https://threejs.org/)** - 3D Graphics Library
*   **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
*   **[React Three Drei](https://github.com/pmndrs/drei)** - Useful helpers for R3F
*   **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling

## Usage Guide

1.  **Controls Panel**: Use the `+` and `-` buttons to change the number of particles.
    *   **Protons**: Determines the element identity (e.g., 6 = Carbon).
    *   **Neutrons**: Affects the mass and stability (Isotopes).
    *   **Electrons**: Affects the charge (Ions) and shells.
2.  **Info Panel**: View detailed properties of your created atom.
    *   Check the **Stability** indicator to see if your nucleus is stable.
    *   Read about the element's **Uses** and **Hazards**.
3.  **View Modes**:
    *   Click **"View Crystal Structure"** to see the solid lattice form.
    *   Use **"Show/Hide Bonds"** to toggle the connection lines in the crystal view.
    *   Click **"Back to Atom"** to return to the single atom builder.

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
