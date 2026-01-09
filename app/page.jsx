import Link from 'next/link';
import { Card } from 'components/card';

const stats = [
    { label: 'Tiempo promedio en ciudad', value: '2h 45m' },
    { label: 'Índice de puntualidad', value: '98.7%' },
    { label: 'Ciudades activas', value: '40+' }
];

const services = [
    {
        title: 'Paquetería urgente',
        description: 'Recolección y entrega en el mismo día con seguimiento minuto a minuto.',
        detail: 'Vehículos dedicados y rutas dinámicas para envíos críticos.'
    },
    {
        title: 'Última milla e e-commerce',
        description: 'Operaciones diseñadas para tiendas en línea y dropshipping.',
        detail: 'Integraciones flexibles, ventanas de entrega y prueba de entrega digital.'
    },
    {
        title: 'Carga dedicada',
        description: 'Camiones y vans asegurados para rutas nacionales y cross-dock.',
        detail: 'Planeación de capacidad, monitoreo 24/7 y SLA garantizados.'
    },
    {
        title: 'Soluciones personalizadas',
        description: 'Modelamos la operación que tu negocio necesita.',
        detail: 'Kitting, devoluciones, lockers y distribución en frío bajo demanda.'
    }
];

const steps = [
    'Confirmamos la recolección en menos de 15 minutos con un operador dedicado.',
    'Asignamos la ruta más rápida y compartimos tracking en tiempo real.',
    'Validamos la entrega con evidencia fotográfica y reporte de cumplimiento diario.'
];

const coverage = [
    'Madrid, Barcelona, Valencia, Bilbao y Sevilla',
    'CDMX, Guadalajara, Monterrey y Puebla',
    'Bogotá, Medellín, Cali y Barranquilla',
    'Red de aliados en 40+ ciudades para picos de demanda'
];

const clients = [
    'E-commerce y retail omnicanal',
    'Laboratorios clínicos y farmacéuticas',
    'Marcas DTC con lanzamientos relámpago',
    'Equipos de mantenimiento y refacciones urgentes'
];

export default function Page() {
    return (
        <div className="flex flex-col gap-16 sm:gap-20">
            <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-white/10 ring-1 ring-white/15">
                        <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden />
                        <span className="text-white/80">Operamos 24/7 para tus envíos urgentes</span>
                    </div>
                    <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                        Logística urgente inspirada en Urgen Cargo
                    </h1>
                    <p className="max-w-2xl text-lg text-white/80">
                        Movemos lo crítico cuando el tiempo importa. Diseñamos rutas ágiles, seguimiento en vivo y equipos
                        dedicados para entregar en horas, no días.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link href="#contacto" className="btn btn-lg bg-amber-400 text-slate-900 hover:bg-amber-300">
                            Cotizar mi envío
                        </Link>
                        <Link
                            href="#servicios"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                        >
                            Ver servicios
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10 shadow-lg shadow-amber-500/5"
                            >
                                <p className="text-2xl font-semibold text-amber-300">{item.value}</p>
                                <p className="text-sm text-white/70">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-cyan-400/10 blur-3xl" aria-hidden />
                    <div className="relative p-1 rounded-3xl bg-white/10 ring-1 ring-white/15">
                        <div className="p-8 space-y-6 rounded-[22px] bg-slate-950/80">
                            <p className="text-sm font-semibold text-amber-200">Control en vivo</p>
                            <h2 className="text-2xl font-bold">Panel operativo</h2>
                            <p className="text-white/75">
                                Seguimiento GPS, reintentos programados y chat con el conductor en la misma interfaz. No dependas de
                                correos ni hojas de cálculo para saber dónde está tu paquete.
                            </p>
                            <div className="space-y-3">
                                {['Tracking en vivo', 'Alertas automáticas', 'Prueba de entrega digital'].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-300/20 text-amber-200">
                                            ✓
                                        </span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="servicios" className="space-y-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase text-amber-200">Soluciones</p>
                        <h2>Lo que hacemos cada día</h2>
                    </div>
                    <Link
                        href="#contacto"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                    >
                        Agenda una llamada
                        <span aria-hidden>→</span>
                    </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-white/90 backdrop-blur text-slate-900 shadow-xl shadow-slate-950/10">
                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center w-12 h-12 text-lg font-semibold text-slate-900 rounded-full bg-amber-300/90">
                                    •
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                                    <p className="text-slate-700">{service.description}</p>
                                    <p className="text-sm text-slate-600">{service.detail}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-2" id="cobertura">
                <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <p className="text-sm font-semibold uppercase text-amber-200">Cómo operamos</p>
                    <h2 className="mt-2">Metodología Urgen</h2>
                    <ol className="mt-4 space-y-4 text-white/80 list-decimal list-inside">
                        {steps.map((step, index) => (
                            <li key={index} className="leading-relaxed">
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <p className="text-sm font-semibold uppercase text-amber-200">Cobertura</p>
                    <h2 className="mt-2">Red de aliados y hubs</h2>
                    <ul className="mt-4 space-y-3 text-white/80">
                        {coverage.map((city) => (
                            <li key={city} className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-6 h-6 mt-0.5 text-xs font-bold rounded-full bg-amber-300/20 text-amber-200">
                                    ●
                                </span>
                                <span>{city}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="clientes" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase text-amber-200">Confían en nosotros</p>
                    <h2>Equipos que priorizan velocidad y visibilidad</h2>
                    <p className="text-white/80">
                        Urgen Cargo se integra con tus sistemas actuales para ofrecer entregas express, devoluciones fáciles y
                        análisis de desempeño. Operamos con SOPs claros y KPIs que revisamos contigo cada semana.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {clients.map((client) => (
                            <div key={client} className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10 text-white/80">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-300/90 via-orange-400/80 to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30">
                    <p className="text-sm font-semibold uppercase">SLA medibles</p>
                    <h3 className="mt-2 text-2xl font-bold">Resultados, no promesas</h3>
                    <ul className="mt-4 space-y-3 text-slate-900/90">
                        <li>Tiempo de respuesta inicial: &lt; 15 minutos.</li>
                        <li>Evidencia de entrega en el momento de la firma.</li>
                        <li>Cuadros de mando diarios y reportes semanales.</li>
                        <li>Equipo de soporte bilingüe 24/7.</li>
                    </ul>
                </div>
            </section>

            <section id="contacto" className="p-6 rounded-2xl bg-white/10 ring-1 ring-white/15">
                <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase text-amber-200">Hablemos</p>
                        <h2>Cuéntanos qué necesitas mover</h2>
                        <p className="text-white/80">
                            En menos de 24 horas tendrás una propuesta operativa con costos claros y tiempos estimados por zona.
                            También podemos comenzar con un piloto de 7 días para validar el servicio.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <Link href="mailto:hola@urgencargo.com" className="btn bg-amber-400 text-slate-900 hover:bg-amber-300">
                                Escribir un correo
                            </Link>
                            <Link
                                href="tel:+34999999999"
                                className="inline-flex items-center gap-2 px-4 py-2 font-semibold transition rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                            >
                                Llamar ahora
                                <span aria-hidden>→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-950/70 ring-1 ring-white/10">
                        <p className="text-sm font-semibold text-white/80">Checklist para comenzar</p>
                        <ul className="mt-3 space-y-2 text-white/70">
                            <li>• Zonas de recolección y entrega.</li>
                            <li>• Ventanas horarias y volumen semanal.</li>
                            <li>• Requerimientos de empaque y evidencia.</li>
                            <li>• Integraciones o herramientas actuales.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
