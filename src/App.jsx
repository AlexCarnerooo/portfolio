import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-secondary">Proyectos</h1>
      </header>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-primary rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="aspect-video bg-gray-800 rounded-lg mb-4">
              {/* Project Image */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Bienes Raíces</h3>
            <p className="text-gray-400 mb-4">Una web de bienes raíces con diseño moderno y responsivo</p>
            <div className="flex gap-2">
              <button className="bg-secondary text-dark px-4 py-2 rounded-full text-sm">Ver más</button>
              <button className="border border-secondary text-secondary px-4 py-2 rounded-full text-sm">Demo</button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-primary rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="aspect-video bg-gray-800 rounded-lg mb-4">
              {/* Project Image */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Landing Page Network</h3>
            <p className="text-gray-400 mb-4">Landing page moderna para servicios de red</p>
            <div className="flex gap-2">
              <button className="bg-secondary text-dark px-4 py-2 rounded-full text-sm">Ver más</button>
              <button className="border border-secondary text-secondary px-4 py-2 rounded-full text-sm">Demo</button>
            </div>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-secondary">Habilidades</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Skill icons would go here */}
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <span className="text-secondary">React</span>
          </div>
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <span className="text-secondary">Node</span>
          </div>
          {/* Add more skill icons as needed */}
        </div>
      </section>
    </div>
  )
}

export default App 