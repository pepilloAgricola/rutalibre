// ─── RutaLibre · Sistema de traducción i18n ───────────────────────────────
// Idiomas soportados: es (español), en (inglés), fr (francés)

const TRANSLATIONS = {

  /* ═══════════════════════ ESPAÑOL ═══════════════════════ */
  es: {
    // Nav
    nav_nosotros:    'Nosotros',
    nav_servicios:   'Servicios',
    nav_como_funciona: 'Cómo funciona',
    nav_carro:       'El Carro',
    nav_conductores: 'Conductores',
    nav_rutas:       'Rutas',
    nav_preguntas:   'Preguntas',
    nav_reservar:    'Reservar ahora',
    skip_content:    'Saltar al contenido',
    nav_menu_label:  'Menú de navegación',
    nav_menu_open:   'Abrir menú',
    nav_menu_close:  'Cerrar menú',

    // Trust bar
    trust_bar: '✅ +200 viajes completados · 📱 Respuesta en menos de 1 hora',
    trust_hide: '📱 Respuesta en menos de 1 hora',

    // Hero
    hero_badge:      'Transporte Privado · Cuba',
    hero_live:       'Disponibles ahora mismo',
    hero_h1_line1:   'Tu viaje,',
    hero_h1_em:      'tu confianza.',
    hero_desc:       'Servicio de transporte privado con conductores de confianza, vehículos cómodos y rutas en toda la isla. Sin complicaciones, con puntualidad y cuidado.',
    hero_btn_primary:'Reservar viaje →',
    hero_btn_outline:'Ver todas las rutas',

    // Stats
    stat_conductores: 'Conductores',
    stat_rating:      'Valoración',
    stat_rutas:       'Rutas activas',
    stat_disponible:  'Disponibilidad',

    // Reviews strip
    review_viajes:     'Viajes completados',
    review_destinos:   'Destinos cubiertos',
    review_respuesta:  'Tiempo de respuesta',
    review_conductores:'Conductores verificados',

    // Nosotros
    section_nosotros_tag:   'Quiénes somos',
    section_nosotros_title: 'Transporte con experiencia y dedicación',
    section_nosotros_p1:    'Somos conductores particulares con años de experiencia recorriendo Cuba de punta a punta. Conocemos cada ruta, cada tramo y cada detalle para que tu viaje sea cómodo, seguro y puntual.',
    section_nosotros_p2:    'No somos una empresa: somos personas reales que cuidan a sus clientes como se cuida a la familia. Tu confianza es nuestra mayor referencia.',
    badge_viajes:            'Viajes completados',

    // Servicios
    section_servicios_title: 'Servicios pensados para ti',
    section_servicios_sub:   'Cada viaje es diferente. Por eso adaptamos el servicio a lo que necesitas.',
    serv1_title: 'Traslado Aeropuerto',
    serv1_desc:  'Te buscamos y te llevamos al aeropuerto con tiempo suficiente. Puntualidad garantizada, equipaje sin límite.',
    serv1_price: 'Precio según ruta',
    serv2_title: 'Viajes Interprovinciales',
    serv2_desc:  '¿Necesitas llegar de La Habana a Santiago o Varadero? Te llevamos cómodo, descansado y sin escalas.',
    serv2_price: 'Desde la puerta de tu casa',
    serv3_title: 'Servicio por Día',
    serv3_desc:  'Contrata el carro por horas o por todo el día para gestiones, paseos o diligencias a tu ritmo.',
    serv3_price: 'Precio pactado de antemano',
    serv4_title: 'Servicio Nocturno',
    serv4_desc:  'Disponibles hasta tarde. Si necesitas transporte de madrugada o en horario difícil, contamos contigo.',
    serv4_price: 'Con aviso previo',
    serv5_title: 'Transporte Familiar',
    serv5_desc:  'Vehículo espacioso para toda la familia. Viajan cómodos, con espacio para maletas y sin apreturas.',
    serv5_price: 'Hasta 4 pasajeros',
    serv6_title: 'Turistas y Visitantes',
    serv6_desc:  'Atención especial para visitantes extranjeros. Hablamos de destinos, historia y te guiamos en el camino.',
    serv6_price: 'Español e inglés básico',

    // Cómo funciona
    section_how_tag:   'Cómo funciona',
    section_how_title: 'Reservar tu viaje es simple',
    section_how_sub:   'Coordinamos todo por WhatsApp para que sepas quién te recoge, cuándo llega y cuánto cuesta antes de salir.',
    how_step1_title:   'Envías tu ruta',
    how_step1_desc:    'Dinos origen, destino, fecha, hora aproximada, pasajeros y maletas.',
    how_step2_title:   'Confirmamos detalles',
    how_step2_desc:    'Te respondemos por WhatsApp con disponibilidad, precio y punto exacto de recogida.',
    how_step3_title:   'Viajamos puerta a puerta',
    how_step3_desc:    'Llegamos puntual, te ayudamos con el equipaje y hacemos el viaje sin paradas innecesarias.',
    how_cta:           'Reservar mi viaje →',

    // Carro
    section_carro_tag:   'El Vehículo',
    section_carro_title: 'Un carro cuidado, limpio y confiable',
    section_carro_sub:   'Nuestro vehículo es mantenido con esmero para garantizar comodidad y seguridad en cada viaje.',
    spec_marca:      'Marca y Modelo',
    spec_color:      'Color',
    spec_color_val:  'Blanco perla',
    spec_clima:      'Climatización',
    spec_clima_val:  'Aire acondicionado',
    spec_cap:        'Capacidad',
    spec_cap_val:    'Hasta 4 pasajeros',
    spec_equip:      'Equipamiento',
    spec_limpieza:   'Limpieza',
    spec_limpieza_val: 'Desinfectado antes de cada viaje',
    badge_clasico:   'Clásico',

    // Conductores
    section_cond_tag:   'El Equipo',
    section_cond_title: 'Conductores con experiencia y respeto',
    section_cond_sub:   'Personas reales, responsables y comprometidas con tu seguridad.',
    cond1_tag:  'Conductor Principal',
    cond1_bio:  'Licencia de 1ª clase. Conoce cada carretera de Cuba. Puntual, serio y con muy buen trato. Ha llevado turistas de todo el mundo.',
    cond1_years:'12 años de experiencia',
    cond2_tag:  'Conductora',
    cond2_bio:  'Especialista en traslados aeropuerto y viajes nocturnos. Muy confiable con pasajeras que viajan solas. Gran sentido de orientación.',
    cond2_years:'7 años de experiencia',
    cond3_tag:  'Conductor Interprovincial',
    cond3_bio:  'Experto en rutas largas a Oriente y Occidente. Conduce tranquilo y con mucho cuidado. Los clientes siempre repiten con él.',
    cond3_years:'9 años de experiencia',

    // Rutas (index preview)
    section_rutas_tag:   'Rutas Disponibles',
    section_rutas_title: 'Llegamos a toda Cuba',
    section_rutas_sub:   'Estas son las rutas más solicitadas.',
    rutas_ver_todas:     'Ver las 12 rutas y traslados →',
    rutas_btn_todas:     'Ver las 12 rutas y traslados con fotos →',
    ruta_consultar:      'Consultar',
    ruta_convenir:       'A convenir',
    ruta_flexible:       'Flexible',
    ruta1_name: 'La Habana → Varadero',
    ruta1_desc: 'Vía Autopista Nacional · Ruta costera disponible',
    ruta2_name: 'La Habana → Viñales',
    ruta2_desc: 'Pinar del Río · Paisajes de mogotes incluidos',
    ruta3_name: 'La Habana → Cienfuegos',
    ruta3_desc: 'La Perla del Sur · Pasaje por Trinidad disponible',
    ruta4_name: 'La Habana → Santiago de Cuba',
    ruta4_desc: 'Ruta larga · Paradas intermedias disponibles',
    ruta5_name: 'Traslado Aeropuerto José Martí',
    ruta5_desc: 'Terminales 1, 2 y 3 · Llegadas y salidas',
    ruta6_name: 'Rutas personalizadas',
    ruta6_desc: '¿Otro destino? Consúltanos, cubrimos toda la isla',

    // FAQ y confianza
    section_faq_tag:   'Preguntas frecuentes',
    section_faq_title: 'Dudas normales antes de reservar',
    section_faq_sub:   'Aquí respondemos lo que casi todos preguntan antes de escribirnos.',
    faq1_q: '¿Con cuánto tiempo debo reservar?',
    faq1_a: 'Lo ideal es reservar con 24 horas de antelación, especialmente para rutas largas. Si es para hoy, escríbenos igual y revisamos disponibilidad.',
    faq2_q: '¿Recogen en el aeropuerto José Martí?',
    faq2_a: 'Sí. Cubrimos llegadas y salidas en las terminales 1, 2 y 3. Coordinamos por WhatsApp el punto exacto de encuentro.',
    faq3_q: '¿El precio se acuerda antes del viaje?',
    faq3_a: 'Sí. Antes de confirmar te damos precio, disponibilidad y condiciones del viaje para que todo quede claro.',
    faq4_q: '¿Puedo viajar con maletas?',
    faq4_a: 'Sí. Solo dinos cuántas personas viajan y cuántas maletas llevan para organizar bien el espacio.',
    faq5_q: '¿Atienden turistas extranjeros?',
    faq5_a: 'Sí. Atendemos viajeros nacionales y extranjeros, y podemos comunicarnos en español, inglés o francés.',
    faq6_q: '¿Hacen rutas personalizadas?',
    faq6_a: 'Sí. Si tu destino no aparece en la lista, escríbenos origen, destino y fecha para revisar la ruta.',
    assurance_1: 'Precio acordado antes del viaje',
    assurance_2: 'Recogida puerta a puerta',
    assurance_3: 'Conductores verificados',
    assurance_4: 'Confirmación por WhatsApp',

    // Contacto
    section_contacto_tag:   'Contáctanos',
    section_contacto_title: '¿Listo para tu próximo viaje?',
    section_contacto_sub:   'Escríbenos o llámanos. Respondemos en menos de 1 hora y acordamos todo sin complicaciones.',
    contact_wa_label:    'WhatsApp / Teléfono',
    contact_tg_label:    'Telegram',
    contact_loc_label:   'Zona de salida principal',
    contact_loc_val:     'La Habana · Recogida a domicilio',
    contact_hrs_label:   'Horario de atención',
    contact_hrs_val:     'Todos los días · 6:00 AM – 12:00 AM',

    // Formulario
    form_title:          'Solicita tu viaje',
    form_trust_strong:   'Recibirás respuesta en menos de 1 hora',
    form_trust_text:     'Al enviar, tu solicitud llega directamente a nuestro WhatsApp con todos los datos.',
    form_nombre_label:   'Tu nombre *',
    form_nombre_ph:      'Ej: María González',
    form_tel_label:      'Teléfono *',
    form_tel_ph:         '5355335946',
    form_origen_label:   'Origen *',
    form_origen_ph:      '¿Desde dónde?',
    form_destino_label:  'Destino *',
    form_destino_ph:     '¿Hasta dónde?',
    form_fecha_label:    'Fecha del viaje',
    form_hora_label:     'Hora aproximada',
    form_servicio_label: 'Tipo de servicio',
    form_servicio_ph:    'Selecciona el tipo de servicio',
    form_opt1: 'Traslado aeropuerto',
    form_opt2: 'Viaje interprovincial',
    form_opt3: 'Servicio por día',
    form_opt4: 'Servicio nocturno',
    form_opt5: 'Turismo / Excursión',
    form_opt6: 'Otro',
    form_notas_label:    'Notas adicionales',
    form_notas_ph:       'Número de pasajeros, equipaje, paradas intermedias...',
    form_btn:            'Enviar solicitud por WhatsApp',
    form_note:           '🔒 Tus datos solo se envían por WhatsApp. No almacenamos información.',
    form_alert:          'Revisa los campos marcados antes de enviar.',
    form_error_name_required: 'Escribe tu nombre.',
    form_error_name_short: 'El nombre debe tener al menos 2 caracteres.',
    form_error_contact_required: 'Escribe tu teléfono.',
    form_error_contact_format: 'Usa solo números: entre 8 y 15 dígitos.',
    form_error_origin_required: 'Indica desde dónde sales.',
    form_error_origin_short: 'El origen debe tener al menos 2 caracteres.',
    form_error_destination_required: 'Indica hacia dónde vas.',
    form_error_destination_short: 'El destino debe tener al menos 2 caracteres.',
    form_error_same_route: 'El origen y el destino no pueden ser iguales.',
    form_error_date_past: 'La fecha no puede ser anterior a hoy.',
    form_error_notes_long: 'Las notas no deben pasar de 280 caracteres.',

    // Footer
    footer_text: '© 2025 RutaLibre · Transporte privado de confianza · Cuba',

    // Rutas page
    routes_hero_badge:  'Transporte Privado · Cuba',
    routes_hero_h1a:    'Cada camino lleva a',
    routes_hero_h1em:   'un destino hermoso.',
    routes_hero_p:      '12 rutas y traslados por toda la isla — playas turquesas, ciudades coloniales, valles verdes y cayos remotos. Puerta a puerta, sin paradas innecesarias.',
    routes_hero_btn:    'Reservar mi viaje →',
    filter_all:         '🗺️ Todas las rutas',
    filter_playa:       '🏖️ Playas',
    filter_colonial:    '🏛️ Ciudades coloniales',
    filter_naturaleza:  '🌿 Naturaleza',
    filter_aeropuerto:  '✈️ Aeropuerto',
    filter_larga:       '🛣️ Largas distancias',
    routes_count:       'rutas y traslados disponibles · Todas salen desde La Habana salvo indicación',
    routes_found_one:   'ruta encontrada',
    routes_found_many:  'rutas encontradas',
    dest_btn_wa:        'Reservar por WhatsApp',
    dest_btn_airport:   'Reservar traslado aeropuerto',

    routes_airport_badge: '✈️ Aeropuerto',
    routes_airport_time:  '🕒 Según zona',
    routes_airport_title: 'Traslado Aeropuerto José Martí',
    routes_airport_pill_1: '✈️ Terminales 1, 2 y 3',
    routes_airport_pill_2: 'Llegadas y salidas',
    routes_airport_pill_3: '🕐 Puntualidad garantizada',
    routes_airport_desc: 'Te recogemos en tu alojamiento con tiempo suficiente y te llevamos directo al aeropuerto. También hacemos recogidas en llegadas: monitoreamos tu vuelo y esperamos aunque haya retrasos. Terminales 1, 2 y 3 · Disponible 24 horas.',
    routes_varadero_badge: '🏖️ Más popular',
    routes_varadero_time:  '🕒 ~2h 30min',
    routes_varadero_title: 'La Habana → Varadero',
    routes_varadero_pill_1: '🏖️ Playa',
    routes_varadero_pill_2: 'Popular entre turistas',
    routes_varadero_pill_3: '~2h 30min',
    routes_varadero_desc: 'La joya del turismo cubano: más de 20 km de arena blanca bañada por el Caribe. Te llevamos cómodo, puerta a puerta, por la Autopista Nacional. Ruta costera disponible bajo pedido. El traslado más solicitado de Cuba.',
    routes_vinales_badge: '🌿 Naturaleza',
    routes_vinales_time:  '🕒 ~2h',
    routes_vinales_title: 'La Habana → Viñales',
    routes_vinales_pill_1: '🌿 Patrimonio UNESCO',
    routes_vinales_pill_2: 'Valle del tabaco',
    routes_vinales_desc: 'Mogotes de piedra caliza sobre campos de tabaco esmeralda — uno de los paisajes más fotogénicos de Cuba. Declarado Patrimonio de la Humanidad por la UNESCO.',
    routes_trinidad_badge: '🏛️ Ciudad colonial',
    routes_trinidad_time:  '🕒 ~5h',
    routes_trinidad_title: 'La Habana → Trinidad',
    routes_trinidad_pill_1: '🏛️ Ciudad colonial',
    routes_trinidad_pill_2: 'Patrimonio UNESCO',
    routes_trinidad_desc: 'Calles empedradas, casas de colores pastel y música saliendo de cada portal. Trinidad es una cápsula del tiempo colonial perfectamente conservada.',
    routes_cayo_santa_maria_badge: '🏖️ Playa premium',
    routes_cayo_santa_maria_time:  '🕒 ~4h',
    routes_cayo_santa_maria_title: 'La Habana → Cayo Santa María',
    routes_cayo_santa_maria_pill_1: '🌊 Agua turquesa',
    routes_cayo_santa_maria_pill_2: 'Resorts todo incluido',
    routes_cayo_santa_maria_desc: 'Una franja de paraíso unida al continente por un largo causeway. Arena fina, agua cálida y los resorts más exclusivos de Cuba.',
    routes_zapata_badge: '🌿 Reserva natural',
    routes_zapata_time:  '🕒 ~2h 30min',
    routes_zapata_title: 'La Habana → Ciénaga de Zapata',
    routes_zapata_pill_1: '🐊 Fauna silvestre',
    routes_zapata_pill_2: 'Humedal protegido',
    routes_zapata_desc: 'El humedal protegido más grande de Cuba — flamencos, cocodrilos y más de 150 especies de aves. Playa Larga y Playa Girón también disponibles en esta ruta.',
    routes_cayo_coco_badge: '🏖️ Resort island',
    routes_cayo_coco_time:  '🕒 ~6h',
    routes_cayo_coco_title: 'La Habana → Cayo Coco',
    routes_cayo_coco_pill_1: '🦩 Flamencos',
    routes_cayo_coco_pill_2: 'Resorts internacionales',
    routes_cayo_coco_desc: 'Flamencos rosados en la orilla, lagunas transparentes y los mejores resorts de Cuba. Uno de los destinos más completos para turistas internacionales.',
    routes_guardalavaca_badge: '🏖️ Joya escondida',
    routes_guardalavaca_time:  '🕒 ~10h',
    routes_guardalavaca_title: 'La Habana → Guardalavaca',
    routes_guardalavaca_pill_1: '🌊 Menos concurrida',
    routes_guardalavaca_pill_2: 'Arrecifes de coral',
    routes_guardalavaca_desc: 'La alternativa más tranquila a Varadero. Playas vírgenes, arrecifes de coral y una atmósfera más íntima. Perfecta para quienes buscan paz y naturaleza.',
    routes_topes_badge: '🌿 Montañas',
    routes_topes_time:  '🕒 ~1h desde Trinidad',
    routes_topes_title: 'Trinidad → Topes de Collantes',
    routes_topes_pill_1: '🏔️ Senderismo',
    routes_topes_pill_2: 'Cascadas',
    routes_topes_desc: 'Un refugio montañoso sobre Trinidad. Bosque nuboso exuberante, pozas naturales y cascadas escondidas. Ideal combinarlo con la visita a Trinidad.',
    routes_el_nicho_badge: '🌿 Cascadas',
    routes_el_nicho_time:  '🕒 ~1h 30min desde Cienfuegos',
    routes_el_nicho_title: 'Cienfuegos → El Nicho',
    routes_el_nicho_pill_1: '💦 Pozas naturales',
    routes_el_nicho_pill_2: 'Sierra del Escambray',
    routes_el_nicho_desc: 'Oculto en lo profundo de la Sierra del Escambray, El Nicho guarda pozas de agua cristalina y cascadas espectaculares. Un secreto que pocos turistas conocen.',
    routes_santiago_badge: '🎶 Larga distancia',
    routes_santiago_time:  '🕒 ~12–14h',
    routes_santiago_title: 'La Habana → Santiago de Cuba',
    routes_santiago_pill_1: '🎶 Son y cultura',
    routes_santiago_pill_2: 'Segunda ciudad de Cuba',
    routes_santiago_desc: 'La cuna del son cubano, la salsa y la revolución. Santiago vibra con una energía única que no encontrarás en ningún otro lugar. Paradas intermedias disponibles bajo solicitud.',
    routes_cienfuegos_badge: '🏛️ Ciudad colonial',
    routes_cienfuegos_time:  '🕒 ~4h',
    routes_cienfuegos_title: 'La Habana → Cienfuegos',
    routes_cienfuegos_pill_1: '🌊 La Perla del Sur',
    routes_cienfuegos_pill_2: 'Influencia francesa',
    routes_cienfuegos_desc: 'La ciudad cubana con más influencia francesa, elegantemente situada sobre una gran bahía. Se puede combinar con Trinidad para el circuito perfecto del centro de Cuba.',
  },

  /* ═══════════════════════ ENGLISH ═══════════════════════ */
  en: {
    nav_nosotros:    'About Us',
    nav_servicios:   'Services',
    nav_como_funciona: 'How it works',
    nav_carro:       'The Car',
    nav_conductores: 'Drivers',
    nav_rutas:       'Routes',
    nav_preguntas:   'FAQ',
    nav_reservar:    'Book Now',
    skip_content:    'Skip to content',
    nav_menu_label:  'Navigation menu',
    nav_menu_open:   'Open menu',
    nav_menu_close:  'Close menu',

    trust_bar: '✅ 200+ trips completed · 📱 Response within 1 hour',
    trust_hide: '📱 Response within 1 hour',

    hero_badge:      'Private Transport · Cuba',
    hero_live:       'Available right now',
    hero_h1_line1:   'Your trip,',
    hero_h1_em:      'your trust.',
    hero_desc:       'Private transport service with trusted drivers, comfortable vehicles and routes across the island. No hassle — just punctuality and care.',
    hero_btn_primary:'Book a trip →',
    hero_btn_outline:'View all routes',

    stat_conductores: 'Drivers',
    stat_rating:      'Rating',
    stat_rutas:       'Active routes',
    stat_disponible:  'Availability',

    review_viajes:     'Trips completed',
    review_destinos:   'Destinations covered',
    review_respuesta:  'Response time',
    review_conductores:'Verified drivers',

    section_nosotros_tag:   'Who we are',
    section_nosotros_title: 'Transport with experience and dedication',
    section_nosotros_p1:    'We are private drivers with years of experience traveling Cuba from end to end. We know every route, every stretch and every detail to make your journey comfortable, safe and on time.',
    section_nosotros_p2:    'We are not a company — we are real people who care for our clients like family. Your trust is our greatest reference.',
    badge_viajes:            'Trips completed',

    section_servicios_title: 'Services designed for you',
    section_servicios_sub:   'Every trip is different. That\'s why we adapt the service to your needs.',
    serv1_title: 'Airport Transfer',
    serv1_desc:  'We pick you up and take you to the airport with plenty of time. Punctuality guaranteed, no luggage limit.',
    serv1_price: 'Price by route',
    serv2_title: 'Interprovincial Trips',
    serv2_desc:  'Need to get from Havana to Santiago or Varadero? We take you there comfortably, rested and direct.',
    serv2_price: 'Door to door',
    serv3_title: 'Full Day Service',
    serv3_desc:  'Hire the car by the hour or for the whole day for errands, sightseeing or activities at your own pace.',
    serv3_price: 'Price agreed in advance',
    serv4_title: 'Night Service',
    serv4_desc:  'Available late into the night. If you need transport at unusual hours, we\'ve got you covered.',
    serv4_price: 'With prior notice',
    serv5_title: 'Family Transport',
    serv5_desc:  'Spacious vehicle for the whole family. Travel comfortably with room for luggage and no squeezing.',
    serv5_price: 'Up to 4 passengers',
    serv6_title: 'Tourists & Visitors',
    serv6_desc:  'Special attention for foreign visitors. We talk destinations, history and guide you along the way.',
    serv6_price: 'Spanish & basic English',

    section_how_tag:   'How it works',
    section_how_title: 'Booking your trip is simple',
    section_how_sub:   'We coordinate everything on WhatsApp so you know who picks you up, when they arrive and how much it costs before you leave.',
    how_step1_title:   'Send your route',
    how_step1_desc:    'Tell us origin, destination, date, approximate time, passengers and luggage.',
    how_step2_title:   'We confirm details',
    how_step2_desc:    'We reply on WhatsApp with availability, price and exact pickup point.',
    how_step3_title:   'We travel door to door',
    how_step3_desc:    'We arrive on time, help with luggage and make the trip without unnecessary stops.',
    how_cta:           'Book my trip →',

    section_carro_tag:   'The Vehicle',
    section_carro_title: 'A well-kept, clean and reliable car',
    section_carro_sub:   'Our vehicle is carefully maintained to guarantee comfort and safety on every journey.',
    spec_marca:      'Make & Model',
    spec_color:      'Color',
    spec_color_val:  'Pearl white',
    spec_clima:      'Climate control',
    spec_clima_val:  'Air conditioning',
    spec_cap:        'Capacity',
    spec_cap_val:    'Up to 4 passengers',
    spec_equip:      'Equipment',
    spec_limpieza:   'Cleanliness',
    spec_limpieza_val: 'Disinfected before every trip',
    badge_clasico:   'Classic',

    section_cond_tag:   'The Team',
    section_cond_title: 'Experienced and respectful drivers',
    section_cond_sub:   'Real people, responsible and committed to your safety.',
    cond1_tag:  'Lead Driver',
    cond1_bio:  'Class-1 licence. Knows every road in Cuba. Punctual, serious and great with people. Has driven tourists from all over the world.',
    cond1_years:'12 years of experience',
    cond2_tag:  'Driver',
    cond2_bio:  'Airport transfer and night-trip specialist. Very reliable for solo female travellers. Excellent sense of direction.',
    cond2_years:'7 years of experience',
    cond3_tag:  'Interprovincial Driver',
    cond3_bio:  'Expert on long routes to Eastern and Western Cuba. Calm and very careful driver. Clients always come back to him.',
    cond3_years:'9 years of experience',

    section_rutas_tag:   'Available Routes',
    section_rutas_title: 'We reach all of Cuba',
    section_rutas_sub:   'These are the most requested routes.',
    rutas_ver_todas:     'View all 12 routes and transfers →',
    rutas_btn_todas:     'View all 12 routes and transfers with photos →',
    ruta_consultar:      'Ask for price',
    ruta_convenir:       'By agreement',
    ruta_flexible:       'Flexible',
    ruta1_name: 'Havana → Varadero',
    ruta1_desc: 'Via National Motorway · Coastal route available',
    ruta2_name: 'Havana → Viñales',
    ruta2_desc: 'Pinar del Río · Mogote landscapes included',
    ruta3_name: 'Havana → Cienfuegos',
    ruta3_desc: 'Pearl of the South · Trinidad stop available',
    ruta4_name: 'Havana → Santiago de Cuba',
    ruta4_desc: 'Long route · Intermediate stops available',
    ruta5_name: 'José Martí Airport Transfer',
    ruta5_desc: 'Terminals 1, 2 & 3 · Arrivals and departures',
    ruta6_name: 'Custom routes',
    ruta6_desc: 'Another destination? Ask us — we cover the whole island',

    section_faq_tag:   'Frequently asked questions',
    section_faq_title: 'Common doubts before booking',
    section_faq_sub:   'Here we answer what most people ask before messaging us.',
    faq1_q: 'How far in advance should I book?',
    faq1_a: 'Ideally, book 24 hours in advance, especially for long routes. If you need a trip today, message us anyway and we will check availability.',
    faq2_q: 'Do you pick up at José Martí Airport?',
    faq2_a: 'Yes. We cover arrivals and departures at terminals 1, 2 and 3. We coordinate the exact meeting point on WhatsApp.',
    faq3_q: 'Is the price agreed before the trip?',
    faq3_a: 'Yes. Before confirming, we send you the price, availability and trip conditions so everything is clear.',
    faq4_q: 'Can I travel with luggage?',
    faq4_a: 'Yes. Just tell us how many people are traveling and how many bags you have so we can organize the space.',
    faq5_q: 'Do you serve foreign tourists?',
    faq5_a: 'Yes. We serve Cuban and international travelers, and we can communicate in Spanish, English or French.',
    faq6_q: 'Do you offer custom routes?',
    faq6_a: 'Yes. If your destination is not listed, send us your origin, destination and date so we can review the route.',
    assurance_1: 'Price agreed before the trip',
    assurance_2: 'Door-to-door pickup',
    assurance_3: 'Verified drivers',
    assurance_4: 'Confirmation by WhatsApp',

    section_contacto_tag:   'Contact us',
    section_contacto_title: 'Ready for your next trip?',
    section_contacto_sub:   'Message or call us. We respond within 1 hour and arrange everything with no fuss.',
    contact_wa_label:    'WhatsApp / Phone',
    contact_tg_label:    'Telegram',
    contact_loc_label:   'Main departure area',
    contact_loc_val:     'Havana · Home pickup',
    contact_hrs_label:   'Working hours',
    contact_hrs_val:     'Every day · 6:00 AM – 12:00 AM',

    form_title:          'Request your trip',
    form_trust_strong:   'You\'ll receive a reply within 1 hour',
    form_trust_text:     'When you submit, your request goes directly to our WhatsApp with all the details.',
    form_nombre_label:   'Your name *',
    form_nombre_ph:      'E.g. John Smith',
    form_tel_label:      'Phone *',
    form_tel_ph:         '5355335946',
    form_origen_label:   'Origin *',
    form_origen_ph:      'From where?',
    form_destino_label:  'Destination *',
    form_destino_ph:     'To where?',
    form_fecha_label:    'Trip date',
    form_hora_label:     'Approximate time',
    form_servicio_label: 'Service type',
    form_servicio_ph:    'Select service type',
    form_opt1: 'Airport transfer',
    form_opt2: 'Interprovincial trip',
    form_opt3: 'Full day service',
    form_opt4: 'Night service',
    form_opt5: 'Tourism / Excursion',
    form_opt6: 'Other',
    form_notas_label:    'Additional notes',
    form_notas_ph:       'Number of passengers, luggage, intermediate stops...',
    form_btn:            'Send request via WhatsApp',
    form_note:           '🔒 Your data is only sent via WhatsApp. We don\'t store any information.',
    form_alert:          'Please review the highlighted fields before sending.',
    form_error_name_required: 'Enter your name.',
    form_error_name_short: 'Your name must be at least 2 characters.',
    form_error_contact_required: 'Enter your phone number.',
    form_error_contact_format: 'Use numbers only: 8 to 15 digits.',
    form_error_origin_required: 'Tell us where you are leaving from.',
    form_error_origin_short: 'Origin must be at least 2 characters.',
    form_error_destination_required: 'Tell us where you are going.',
    form_error_destination_short: 'Destination must be at least 2 characters.',
    form_error_same_route: 'Origin and destination cannot be the same.',
    form_error_date_past: 'The date cannot be earlier than today.',
    form_error_notes_long: 'Notes must be 280 characters or fewer.',

    footer_text: '© 2025 RutaLibre · Trusted private transport · Cuba',

    routes_hero_badge:  'Private Transport · Cuba',
    routes_hero_h1a:    'Every road leads to',
    routes_hero_h1em:   'a beautiful destination.',
    routes_hero_p:      '12 routes and transfers across the island — turquoise beaches, colonial cities, green valleys and remote keys. Door to door, no unnecessary stops.',
    routes_hero_btn:    'Book my trip →',
    filter_all:         '🗺️ All routes',
    filter_playa:       '🏖️ Beaches',
    filter_colonial:    '🏛️ Colonial cities',
    filter_naturaleza:  '🌿 Nature',
    filter_aeropuerto:  '✈️ Airport',
    filter_larga:       '🛣️ Long distance',
    routes_count:       'routes and transfers available · All depart from Havana unless stated',
    routes_found_one:   'route found',
    routes_found_many:  'routes found',
    dest_btn_wa:        'Book via WhatsApp',
    dest_btn_airport:   'Book airport transfer',

    routes_airport_badge: '✈️ Airport',
    routes_airport_time:  '🕒 Depending on area',
    routes_airport_title: 'José Martí Airport Transfer',
    routes_airport_pill_1: '✈️ Terminals 1, 2 & 3',
    routes_airport_pill_2: 'Arrivals and departures',
    routes_airport_pill_3: '🕐 On-time guarantee',
    routes_airport_desc: 'We pick you up from your accommodation with plenty of time and take you straight to the airport. We also handle arrivals: we monitor your flight and wait even if there are delays. Terminals 1, 2 & 3 · Available 24 hours.',
    routes_varadero_badge: '🏖️ Most popular',
    routes_varadero_time:  '🕒 ~2h 30min',
    routes_varadero_title: 'Havana → Varadero',
    routes_varadero_pill_1: '🏖️ Beach',
    routes_varadero_pill_2: 'Popular with tourists',
    routes_varadero_pill_3: '~2h 30min',
    routes_varadero_desc: 'The jewel of Cuban tourism: more than 20 km of white sand washed by the Caribbean. We take you comfortably, door to door, via the National Motorway. Coastal route available on request. Cuba’s most requested transfer.',
    routes_vinales_badge: '🌿 Nature',
    routes_vinales_time:  '🕒 ~2h',
    routes_vinales_title: 'Havana → Viñales',
    routes_vinales_pill_1: '🌿 UNESCO Heritage',
    routes_vinales_pill_2: 'Tobacco valley',
    routes_vinales_desc: 'Limestone mogotes rising over emerald tobacco fields — one of Cuba’s most photogenic landscapes. Declared a UNESCO World Heritage Site.',
    routes_trinidad_badge: '🏛️ Colonial city',
    routes_trinidad_time:  '🕒 ~5h',
    routes_trinidad_title: 'Havana → Trinidad',
    routes_trinidad_pill_1: '🏛️ Colonial city',
    routes_trinidad_pill_2: 'UNESCO Heritage',
    routes_trinidad_desc: 'Cobblestone streets, pastel-colored houses and music flowing out of every doorway. Trinidad is a perfectly preserved colonial time capsule.',
    routes_cayo_santa_maria_badge: '🏖️ Premium beach',
    routes_cayo_santa_maria_time:  '🕒 ~4h',
    routes_cayo_santa_maria_title: 'Havana → Cayo Santa Maria',
    routes_cayo_santa_maria_pill_1: '🌊 Turquoise water',
    routes_cayo_santa_maria_pill_2: 'All-inclusive resorts',
    routes_cayo_santa_maria_desc: 'A strip of paradise connected to the mainland by a long causeway. Fine sand, warm water and some of Cuba’s most exclusive resorts.',
    routes_zapata_badge: '🌿 Nature reserve',
    routes_zapata_time:  '🕒 ~2h 30min',
    routes_zapata_title: 'Havana → Zapata Swamp',
    routes_zapata_pill_1: '🐊 Wildlife',
    routes_zapata_pill_2: 'Protected wetland',
    routes_zapata_desc: 'Cuba’s largest protected wetland — flamingos, crocodiles and more than 150 bird species. Playa Larga and Playa Girón are also available on this route.',
    routes_cayo_coco_badge: '🏖️ Resort island',
    routes_cayo_coco_time:  '🕒 ~6h',
    routes_cayo_coco_title: 'Havana → Cayo Coco',
    routes_cayo_coco_pill_1: '🦩 Flamingos',
    routes_cayo_coco_pill_2: 'International resorts',
    routes_cayo_coco_desc: 'Pink flamingos along the shore, transparent lagoons and some of Cuba’s best resorts. One of the most complete destinations for international visitors.',
    routes_guardalavaca_badge: '🏖️ Hidden gem',
    routes_guardalavaca_time:  '🕒 ~10h',
    routes_guardalavaca_title: 'Havana → Guardalavaca',
    routes_guardalavaca_pill_1: '🌊 Less crowded',
    routes_guardalavaca_pill_2: 'Coral reefs',
    routes_guardalavaca_desc: 'A quieter alternative to Varadero. Unspoiled beaches, coral reefs and a more intimate atmosphere. Perfect for travelers looking for peace and nature.',
    routes_topes_badge: '🌿 Mountains',
    routes_topes_time:  '🕒 ~1h from Trinidad',
    routes_topes_title: 'Trinidad → Topes de Collantes',
    routes_topes_pill_1: '🏔️ Hiking',
    routes_topes_pill_2: 'Waterfalls',
    routes_topes_desc: 'A mountain refuge above Trinidad. Lush cloud forest, natural pools and hidden waterfalls. Ideal to combine with a visit to Trinidad.',
    routes_el_nicho_badge: '🌿 Waterfalls',
    routes_el_nicho_time:  '🕒 ~1h 30min from Cienfuegos',
    routes_el_nicho_title: 'Cienfuegos → El Nicho',
    routes_el_nicho_pill_1: '💦 Natural pools',
    routes_el_nicho_pill_2: 'Escambray Mountains',
    routes_el_nicho_desc: 'Hidden deep in the Escambray Mountains, El Nicho has crystal-clear pools and spectacular waterfalls. A secret few tourists get to know.',
    routes_santiago_badge: '🎶 Long distance',
    routes_santiago_time:  '🕒 ~12–14h',
    routes_santiago_title: 'Havana → Santiago de Cuba',
    routes_santiago_pill_1: '🎶 Son and culture',
    routes_santiago_pill_2: 'Cuba’s second city',
    routes_santiago_desc: 'The birthplace of Cuban son, salsa and revolution. Santiago has a unique energy you won’t find anywhere else. Intermediate stops available on request.',
    routes_cienfuegos_badge: '🏛️ Colonial city',
    routes_cienfuegos_time:  '🕒 ~4h',
    routes_cienfuegos_title: 'Havana → Cienfuegos',
    routes_cienfuegos_pill_1: '🌊 Pearl of the South',
    routes_cienfuegos_pill_2: 'French influence',
    routes_cienfuegos_desc: 'The Cuban city with the strongest French influence, elegantly set on a large bay. It can be combined with Trinidad for the perfect central Cuba circuit.',
  },

  /* ═══════════════════════ FRANÇAIS ═══════════════════════ */
  fr: {
    nav_nosotros:    'À propos',
    nav_servicios:   'Services',
    nav_como_funciona: 'Fonctionnement',
    nav_carro:       'Le Véhicule',
    nav_conductores: 'Chauffeurs',
    nav_rutas:       'Itinéraires',
    nav_preguntas:   'Questions',
    nav_reservar:    'Réserver',
    skip_content:    'Aller au contenu',
    nav_menu_label:  'Menu de navigation',
    nav_menu_open:   'Ouvrir le menu',
    nav_menu_close:  'Fermer le menu',

    trust_bar: '✅ +200 voyages effectués · 📱 Réponse en moins d\'1 heure',
    trust_hide: '📱 Réponse en moins d\'1 heure',

    hero_badge:      'Transport Privé · Cuba',
    hero_live:       'Disponibles en ce moment',
    hero_h1_line1:   'Votre voyage,',
    hero_h1_em:      'votre confiance.',
    hero_desc:       'Service de transport privé avec des chauffeurs de confiance, des véhicules confortables et des trajets dans toute l\'île. Simple, ponctuel et soigné.',
    hero_btn_primary:'Réserver un voyage →',
    hero_btn_outline:'Voir tous les itinéraires',

    stat_conductores: 'Chauffeurs',
    stat_rating:      'Évaluation',
    stat_rutas:       'Itinéraires actifs',
    stat_disponible:  'Disponibilité',

    review_viajes:     'Voyages effectués',
    review_destinos:   'Destinations couvertes',
    review_respuesta:  'Temps de réponse',
    review_conductores:'Chauffeurs vérifiés',

    section_nosotros_tag:   'Qui sommes-nous',
    section_nosotros_title: 'Transport avec expérience et dévouement',
    section_nosotros_p1:    'Nous sommes des chauffeurs privés avec des années d\'expérience à parcourir Cuba de bout en bout. Nous connaissons chaque route, chaque tronçon et chaque détail pour que votre voyage soit confortable, sûr et ponctuel.',
    section_nosotros_p2:    'Nous ne sommes pas une entreprise — nous sommes de vraies personnes qui prennent soin de leurs clients comme d\'une famille. Votre confiance est notre plus grande référence.',
    badge_viajes:            'Voyages effectués',

    section_servicios_title: 'Services pensés pour vous',
    section_servicios_sub:   'Chaque voyage est différent. C\'est pourquoi nous adaptons le service à vos besoins.',
    serv1_title: 'Transfert Aéroport',
    serv1_desc:  'Nous vous récupérons et vous amenons à l\'aéroport avec suffisamment de temps. Ponctualité garantie, bagages sans limite.',
    serv1_price: 'Prix selon trajet',
    serv2_title: 'Voyages Interprovinciaux',
    serv2_desc:  'Besoin d\'aller de La Havane à Santiago ou Varadero ? Nous vous emmenons confortablement, sans escale.',
    serv2_price: 'De porte à porte',
    serv3_title: 'Service à la Journée',
    serv3_desc:  'Louez la voiture à l\'heure ou à la journée pour vos démarches, promenades ou activités à votre rythme.',
    serv3_price: 'Prix convenu à l\'avance',
    serv4_title: 'Service Nocturne',
    serv4_desc:  'Disponibles tard le soir. Si vous avez besoin d\'un transport de nuit ou en horaire difficile, nous sommes là.',
    serv4_price: 'Avec préavis',
    serv5_title: 'Transport Familial',
    serv5_desc:  'Véhicule spacieux pour toute la famille. Voyagez confortablement avec de la place pour les bagages.',
    serv5_price: 'Jusqu\'à 4 passagers',
    serv6_title: 'Touristes & Visiteurs',
    serv6_desc:  'Attention particulière pour les visiteurs étrangers. Nous parlons destinations, histoire et vous guidons en chemin.',
    serv6_price: 'Espagnol et anglais de base',

    section_how_tag:   'Comment ça marche',
    section_how_title: 'Réserver votre trajet est simple',
    section_how_sub:   'Nous coordonnons tout sur WhatsApp afin que vous sachiez qui vient vous chercher, quand il arrive et combien coûte le trajet avant de partir.',
    how_step1_title:   'Envoyez votre trajet',
    how_step1_desc:    'Indiquez origine, destination, date, heure approximative, passagers et bagages.',
    how_step2_title:   'Nous confirmons les détails',
    how_step2_desc:    'Nous répondons sur WhatsApp avec la disponibilité, le prix et le point exact de prise en charge.',
    how_step3_title:   'Trajet porte à porte',
    how_step3_desc:    'Nous arrivons à l’heure, aidons avec les bagages et faisons le trajet sans arrêts inutiles.',
    how_cta:           'Réserver mon trajet →',

    section_carro_tag:   'Le Véhicule',
    section_carro_title: 'Une voiture entretenue, propre et fiable',
    section_carro_sub:   'Notre véhicule est soigneusement entretenu pour garantir confort et sécurité à chaque voyage.',
    spec_marca:      'Marque & Modèle',
    spec_color:      'Couleur',
    spec_color_val:  'Blanc nacré',
    spec_clima:      'Climatisation',
    spec_clima_val:  'Air conditionné',
    spec_cap:        'Capacité',
    spec_cap_val:    'Jusqu\'à 4 passagers',
    spec_equip:      'Équipement',
    spec_limpieza:   'Propreté',
    spec_limpieza_val: 'Désinfecté avant chaque voyage',
    badge_clasico:   'Classique',

    section_cond_tag:   'L\'Équipe',
    section_cond_title: 'Chauffeurs expérimentés et respectueux',
    section_cond_sub:   'De vraies personnes, responsables et engagées pour votre sécurité.',
    cond1_tag:  'Chauffeur Principal',
    cond1_bio:  'Permis de 1ère classe. Connaît chaque route de Cuba. Ponctuel, sérieux et très agréable. A transporté des touristes du monde entier.',
    cond1_years:'12 ans d\'expérience',
    cond2_tag:  'Chauffeure',
    cond2_bio:  'Spécialiste des transferts aéroport et des voyages nocturnes. Très fiable pour les femmes voyageant seules. Excellent sens de l\'orientation.',
    cond2_years:'7 ans d\'expérience',
    cond3_tag:  'Chauffeur Interprovincial',
    cond3_bio:  'Expert des longs trajets vers l\'Est et l\'Ouest de Cuba. Conduite calme et très soigneuse. Les clients reviennent toujours avec lui.',
    cond3_years:'9 ans d\'expérience',

    section_rutas_tag:   'Itinéraires Disponibles',
    section_rutas_title: 'Nous couvrons toute Cuba',
    section_rutas_sub:   'Voici les itinéraires les plus demandés.',
    rutas_ver_todas:     'Voir les 12 itinéraires et transferts →',
    rutas_btn_todas:     'Voir les 12 itinéraires et transferts avec photos →',
    ruta_consultar:      'Nous contacter',
    ruta_convenir:       'À convenir',
    ruta_flexible:       'Flexible',
    ruta1_name: 'La Havane → Varadero',
    ruta1_desc: 'Via Autoroute Nationale · Itinéraire côtier disponible',
    ruta2_name: 'La Havane → Viñales',
    ruta2_desc: 'Pinar del Río · Paysages de mogotes inclus',
    ruta3_name: 'La Havane → Cienfuegos',
    ruta3_desc: 'La Perle du Sud · Arrêt Trinidad disponible',
    ruta4_name: 'La Havane → Santiago de Cuba',
    ruta4_desc: 'Long trajet · Arrêts intermédiaires disponibles',
    ruta5_name: 'Transfert Aéroport José Martí',
    ruta5_desc: 'Terminaux 1, 2 et 3 · Arrivées et départs',
    ruta6_name: 'Itinéraires personnalisés',
    ruta6_desc: 'Une autre destination ? Demandez-nous, nous couvrons toute l\'île',

    section_faq_tag:   'Questions fréquentes',
    section_faq_title: 'Questions normales avant de réserver',
    section_faq_sub:   'Voici les réponses aux questions que presque tout le monde pose avant de nous écrire.',
    faq1_q: 'Combien de temps à l’avance faut-il réserver ?',
    faq1_a: 'L’idéal est de réserver 24 heures à l’avance, surtout pour les longs trajets. Si c’est pour aujourd’hui, écrivez-nous quand même et nous vérifierons la disponibilité.',
    faq2_q: 'Faites-vous la prise en charge à l’aéroport José Martí ?',
    faq2_a: 'Oui. Nous couvrons les arrivées et les départs aux terminaux 1, 2 et 3. Nous coordonnons le point exact de rencontre sur WhatsApp.',
    faq3_q: 'Le prix est-il convenu avant le trajet ?',
    faq3_a: 'Oui. Avant de confirmer, nous vous envoyons le prix, la disponibilité et les conditions du trajet afin que tout soit clair.',
    faq4_q: 'Puis-je voyager avec des bagages ?',
    faq4_a: 'Oui. Indiquez simplement combien de personnes voyagent et combien de bagages vous avez pour organiser l’espace.',
    faq5_q: 'Acceptez-vous les touristes étrangers ?',
    faq5_a: 'Oui. Nous accompagnons des voyageurs cubains et internationaux, et nous pouvons communiquer en espagnol, anglais ou français.',
    faq6_q: 'Proposez-vous des itinéraires personnalisés ?',
    faq6_a: 'Oui. Si votre destination n’apparaît pas dans la liste, envoyez-nous l’origine, la destination et la date pour vérifier l’itinéraire.',
    assurance_1: 'Prix convenu avant le trajet',
    assurance_2: 'Prise en charge porte à porte',
    assurance_3: 'Chauffeurs vérifiés',
    assurance_4: 'Confirmation par WhatsApp',

    section_contacto_tag:   'Contactez-nous',
    section_contacto_title: 'Prêt pour votre prochain voyage ?',
    section_contacto_sub:   'Écrivez-nous ou appelez-nous. Nous répondons en moins d\'1 heure et organisons tout sans complication.',
    contact_wa_label:    'WhatsApp / Téléphone',
    contact_tg_label:    'Telegram',
    contact_loc_label:   'Zone de départ principale',
    contact_loc_val:     'La Havane · Prise en charge à domicile',
    contact_hrs_label:   'Horaires d\'assistance',
    contact_hrs_val:     'Tous les jours · 6h00 – 0h00',

    form_title:          'Demandez votre voyage',
    form_trust_strong:   'Vous recevrez une réponse en moins d\'1 heure',
    form_trust_text:     'En envoyant, votre demande arrive directement sur notre WhatsApp avec toutes les informations.',
    form_nombre_label:   'Votre prénom *',
    form_nombre_ph:      'Ex : Marie Dupont',
    form_tel_label:      'Téléphone *',
    form_tel_ph:         '5355335946',
    form_origen_label:   'Origine *',
    form_origen_ph:      'D\'où partez-vous ?',
    form_destino_label:  'Destination *',
    form_destino_ph:     'Où allez-vous ?',
    form_fecha_label:    'Date du voyage',
    form_hora_label:     'Heure approximative',
    form_servicio_label: 'Type de service',
    form_servicio_ph:    'Sélectionnez le type de service',
    form_opt1: 'Transfert aéroport',
    form_opt2: 'Voyage interprovincial',
    form_opt3: 'Service à la journée',
    form_opt4: 'Service nocturne',
    form_opt5: 'Tourisme / Excursion',
    form_opt6: 'Autre',
    form_notas_label:    'Notes supplémentaires',
    form_notas_ph:       'Nombre de passagers, bagages, arrêts intermédiaires...',
    form_btn:            'Envoyer la demande par WhatsApp',
    form_note:           '🔒 Vos données sont uniquement envoyées via WhatsApp. Nous ne stockons aucune information.',
    form_alert:          'Veuillez vérifier les champs indiqués avant l\'envoi.',
    form_error_name_required: 'Indiquez votre prénom.',
    form_error_name_short: 'Le prénom doit contenir au moins 2 caractères.',
    form_error_contact_required: 'Indiquez votre téléphone.',
    form_error_contact_format: 'Utilisez uniquement des chiffres : 8 à 15 chiffres.',
    form_error_origin_required: 'Indiquez votre lieu de départ.',
    form_error_origin_short: 'L\'origine doit contenir au moins 2 caractères.',
    form_error_destination_required: 'Indiquez votre destination.',
    form_error_destination_short: 'La destination doit contenir au moins 2 caractères.',
    form_error_same_route: 'L\'origine et la destination ne peuvent pas être identiques.',
    form_error_date_past: 'La date ne peut pas être antérieure à aujourd\'hui.',
    form_error_notes_long: 'Les notes ne doivent pas dépasser 280 caractères.',

    footer_text: '© 2025 RutaLibre · Transport privé de confiance · Cuba',

    routes_hero_badge:  'Transport Privé · Cuba',
    routes_hero_h1a:    'Chaque chemin mène à',
    routes_hero_h1em:   'une belle destination.',
    routes_hero_p:      '12 itinéraires et transferts à travers l\'île — plages turquoise, villes coloniales, vallées vertes et cayes isolées. De porte à porte, sans arrêts inutiles.',
    routes_hero_btn:    'Réserver mon voyage →',
    filter_all:         '🗺️ Tous les itinéraires',
    filter_playa:       '🏖️ Plages',
    filter_colonial:    '🏛️ Villes coloniales',
    filter_naturaleza:  '🌿 Nature',
    filter_aeropuerto:  '✈️ Aéroport',
    filter_larga:       '🛣️ Longues distances',
    routes_count:       'itinéraires et transferts disponibles · Tous au départ de La Havane sauf indication',
    routes_found_one:   'itinéraire trouvé',
    routes_found_many:  'itinéraires trouvés',
    dest_btn_wa:        'Réserver via WhatsApp',
    dest_btn_airport:   'Réserver le transfert aéroport',

    routes_airport_badge: '✈️ Aéroport',
    routes_airport_time:  '🕒 Selon la zone',
    routes_airport_title: 'Transfert aéroport José Martí',
    routes_airport_pill_1: '✈️ Terminaux 1, 2 et 3',
    routes_airport_pill_2: 'Arrivées et départs',
    routes_airport_pill_3: '🕐 Ponctualité garantie',
    routes_airport_desc: 'Nous venons vous chercher à votre hébergement avec suffisamment d’avance et vous conduisons directement à l’aéroport. Nous assurons aussi les arrivées : nous suivons votre vol et attendons même en cas de retard. Terminaux 1, 2 et 3 · Disponible 24h/24.',
    routes_varadero_badge: '🏖️ Le plus populaire',
    routes_varadero_time:  '🕒 ~2h 30min',
    routes_varadero_title: 'La Havane → Varadero',
    routes_varadero_pill_1: '🏖️ Plage',
    routes_varadero_pill_2: 'Très demandé par les touristes',
    routes_varadero_pill_3: '~2h 30min',
    routes_varadero_desc: 'Le joyau du tourisme cubain : plus de 20 km de sable blanc bordé par la Caraïbe. Nous vous y conduisons confortablement, de porte à porte, par l’Autoroute Nationale. Itinéraire côtier disponible sur demande. Le transfert le plus demandé de Cuba.',
    routes_vinales_badge: '🌿 Nature',
    routes_vinales_time:  '🕒 ~2h',
    routes_vinales_title: 'La Havane → Viñales',
    routes_vinales_pill_1: '🌿 Patrimoine UNESCO',
    routes_vinales_pill_2: 'Vallée du tabac',
    routes_vinales_desc: 'Des mogotes calcaires au-dessus de champs de tabac émeraude — l’un des paysages les plus photogéniques de Cuba. Classé au patrimoine mondial de l’UNESCO.',
    routes_trinidad_badge: '🏛️ Ville coloniale',
    routes_trinidad_time:  '🕒 ~5h',
    routes_trinidad_title: 'La Havane → Trinidad',
    routes_trinidad_pill_1: '🏛️ Ville coloniale',
    routes_trinidad_pill_2: 'Patrimoine UNESCO',
    routes_trinidad_desc: 'Rues pavées, maisons aux couleurs pastel et musique à chaque portail. Trinidad est une capsule du temps coloniale parfaitement conservée.',
    routes_cayo_santa_maria_badge: '🏖️ Plage premium',
    routes_cayo_santa_maria_time:  '🕒 ~4h',
    routes_cayo_santa_maria_title: 'La Havane → Cayo Santa María',
    routes_cayo_santa_maria_pill_1: '🌊 Eau turquoise',
    routes_cayo_santa_maria_pill_2: 'Resorts tout compris',
    routes_cayo_santa_maria_desc: 'Une bande de paradis reliée au continent par un long causeway. Sable fin, eau chaude et certains des resorts les plus exclusifs de Cuba.',
    routes_zapata_badge: '🌿 Réserve naturelle',
    routes_zapata_time:  '🕒 ~2h 30min',
    routes_zapata_title: 'La Havane → Marais de Zapata',
    routes_zapata_pill_1: '🐊 Faune sauvage',
    routes_zapata_pill_2: 'Zone humide protégée',
    routes_zapata_desc: 'La plus grande zone humide protégée de Cuba — flamants roses, crocodiles et plus de 150 espèces d’oiseaux. Playa Larga et Playa Girón sont aussi disponibles sur cet itinéraire.',
    routes_cayo_coco_badge: '🏖️ Île resort',
    routes_cayo_coco_time:  '🕒 ~6h',
    routes_cayo_coco_title: 'La Havane → Cayo Coco',
    routes_cayo_coco_pill_1: '🦩 Flamants roses',
    routes_cayo_coco_pill_2: 'Resorts internationaux',
    routes_cayo_coco_desc: 'Flamants roses sur le rivage, lagunes transparentes et quelques-uns des meilleurs resorts de Cuba. L’une des destinations les plus complètes pour les visiteurs internationaux.',
    routes_guardalavaca_badge: '🏖️ Joyau caché',
    routes_guardalavaca_time:  '🕒 ~10h',
    routes_guardalavaca_title: 'La Havane → Guardalavaca',
    routes_guardalavaca_pill_1: '🌊 Moins fréquentée',
    routes_guardalavaca_pill_2: 'Récifs coralliens',
    routes_guardalavaca_desc: 'Une alternative plus tranquille à Varadero. Plages préservées, récifs coralliens et atmosphère plus intime. Parfaite pour ceux qui cherchent paix et nature.',
    routes_topes_badge: '🌿 Montagnes',
    routes_topes_time:  '🕒 ~1h depuis Trinidad',
    routes_topes_title: 'Trinidad → Topes de Collantes',
    routes_topes_pill_1: '🏔️ Randonnée',
    routes_topes_pill_2: 'Cascades',
    routes_topes_desc: 'Un refuge montagneux au-dessus de Trinidad. Forêt de nuages luxuriante, piscines naturelles et cascades cachées. Idéal à combiner avec la visite de Trinidad.',
    routes_el_nicho_badge: '🌿 Cascades',
    routes_el_nicho_time:  '🕒 ~1h 30min depuis Cienfuegos',
    routes_el_nicho_title: 'Cienfuegos → El Nicho',
    routes_el_nicho_pill_1: '💦 Piscines naturelles',
    routes_el_nicho_pill_2: 'Sierra del Escambray',
    routes_el_nicho_desc: 'Caché au cœur de la Sierra del Escambray, El Nicho abrite des piscines d’eau cristalline et des cascades spectaculaires. Un secret que peu de touristes connaissent.',
    routes_santiago_badge: '🎶 Longue distance',
    routes_santiago_time:  '🕒 ~12–14h',
    routes_santiago_title: 'La Havane → Santiago de Cuba',
    routes_santiago_pill_1: '🎶 Son et culture',
    routes_santiago_pill_2: 'Deuxième ville de Cuba',
    routes_santiago_desc: 'Le berceau du son cubain, de la salsa et de la révolution. Santiago vibre avec une énergie unique que vous ne trouverez nulle part ailleurs. Arrêts intermédiaires disponibles sur demande.',
    routes_cienfuegos_badge: '🏛️ Ville coloniale',
    routes_cienfuegos_time:  '🕒 ~4h',
    routes_cienfuegos_title: 'La Havane → Cienfuegos',
    routes_cienfuegos_pill_1: '🌊 La Perle du Sud',
    routes_cienfuegos_pill_2: 'Influence française',
    routes_cienfuegos_desc: 'La ville cubaine à l’influence française la plus marquée, élégamment située sur une grande baie. Elle peut se combiner avec Trinidad pour le circuit parfait du centre de Cuba.',
  }
};

const SEO_TRANSLATIONS = {
  es: {
    index: {
      title: 'RutaLibre — Transporte Privado en Cuba | Traslados Puerta a Puerta',
      description: 'Transporte privado de confianza en Cuba. Traslados aeropuerto, viajes interprovinciales a Varadero, Viñales, Trinidad, Santiago y más.',
      ogTitle: 'RutaLibre — Transporte Privado de Confianza en Cuba',
      ogDescription: 'Conductores verificados. Puerta a puerta. Varadero, Viñales, Trinidad, Santiago y más.',
      imageAlt: 'Vehículo de RutaLibre para transporte privado en Cuba',
      whatsappLabel: 'Contactar por WhatsApp',
      locale: 'es_CU',
    },
    rutas: {
      title: 'Rutas de Transporte Privado en Cuba | RutaLibre — Varadero, Viñales, Trinidad y más',
      description: '12 rutas y traslados de transporte privado por Cuba: aeropuerto, Varadero, Viñales, Trinidad, Santiago, Cayo Coco y más. Puerta a puerta desde La Habana.',
      ogTitle: '12 Rutas y Traslados de Transporte Privado en Cuba — RutaLibre',
      ogDescription: 'Varadero, Viñales, Trinidad, Cayo Coco, Santiago y más. Traslados puerta a puerta con conductores de confianza.',
      imageAlt: 'Playa de Varadero en Cuba, una de las rutas privadas de RutaLibre',
      whatsappLabel: 'Contactar por WhatsApp',
      locale: 'es_CU',
    },
  },
  en: {
    index: {
      title: 'RutaLibre — Private Transport in Cuba | Door-to-Door Transfers',
      description: 'Trusted private transport in Cuba. Airport transfers and interprovincial trips to Varadero, Viñales, Trinidad, Santiago and more.',
      ogTitle: 'RutaLibre — Trusted Private Transport in Cuba',
      ogDescription: 'Verified drivers. Door to door. Varadero, Viñales, Trinidad, Santiago and more.',
      imageAlt: 'RutaLibre vehicle for private transport in Cuba',
      whatsappLabel: 'Contact RutaLibre on WhatsApp',
      locale: 'en_US',
    },
    rutas: {
      title: 'Private Transport Routes in Cuba | RutaLibre — Varadero, Viñales, Trinidad and more',
      description: '12 private transport routes and transfers in Cuba: airport, Varadero, Viñales, Trinidad, Santiago, Cayo Coco and more. Door to door from Havana.',
      ogTitle: '12 Private Transport Routes and Transfers in Cuba — RutaLibre',
      ogDescription: 'Varadero, Viñales, Trinidad, Cayo Coco, Santiago and more. Door-to-door transfers with trusted drivers.',
      imageAlt: 'Varadero beach in Cuba, one of RutaLibre private transport routes',
      whatsappLabel: 'Contact RutaLibre on WhatsApp',
      locale: 'en_US',
    },
  },
  fr: {
    index: {
      title: 'RutaLibre — Transport privé à Cuba | Transferts porte à porte',
      description: 'Transport privé de confiance à Cuba. Transferts aéroport et trajets interprovinciaux vers Varadero, Viñales, Trinidad, Santiago et plus.',
      ogTitle: 'RutaLibre — Transport privé de confiance à Cuba',
      ogDescription: 'Chauffeurs vérifiés. Porte à porte. Varadero, Viñales, Trinidad, Santiago et plus.',
      imageAlt: 'Véhicule RutaLibre pour le transport privé à Cuba',
      whatsappLabel: 'Contacter RutaLibre sur WhatsApp',
      locale: 'fr_FR',
    },
    rutas: {
      title: 'Itinéraires de transport privé à Cuba | RutaLibre — Varadero, Viñales, Trinidad et plus',
      description: '12 itinéraires et transferts privés à Cuba : aéroport, Varadero, Viñales, Trinidad, Santiago, Cayo Coco et plus. Porte à porte depuis La Havane.',
      ogTitle: '12 itinéraires et transferts privés à Cuba — RutaLibre',
      ogDescription: 'Varadero, Viñales, Trinidad, Cayo Coco, Santiago et plus. Transferts porte à porte avec chauffeurs de confiance.',
      imageAlt: 'Plage de Varadero à Cuba, un des itinéraires privés de RutaLibre',
      whatsappLabel: 'Contacter RutaLibre sur WhatsApp',
      locale: 'fr_FR',
    },
  },
};

// ─── Motor de traducción ──────────────────────────────────────────────────────

const I18N = {
  current: 'es',

  init() {
    const saved = this._getSavedLang();
    this.setLang(saved, false);
    this._renderSelector();
  },

  setLang(lang, save = true) {
    if (!TRANSLATIONS[lang]) return;
    this.current = lang;
    if (save) this._saveLang(lang);

    // Actualizar atributo lang del html
    document.documentElement.lang = lang;
    this._updateDocumentMeta(lang);

    // Traducir todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = TRANSLATIONS[lang][key];
      if (val === undefined) return;

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.dataset.i18nAttr === 'placeholder') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    // Traducir placeholders con data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      const val = TRANSLATIONS[lang][key];
      if (val !== undefined) el.placeholder = val;
    });

    // Traducir tarjetas de la pagina de rutas
    this._translateRouteCards(lang);

    // Actualizar el selector visual
    this._updateSelector(lang);

    // Actualizar contador de rutas si existe
    this.updateRouteCount();

    document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
  },

  t(key, fallback) {
    return this._getTranslation(key) ?? fallback ?? key;
  },

  updateRouteCount() {
    const countEl = document.getElementById('routeCount');
    if (!countEl) return;

    const visible = document.querySelectorAll('.dest-card:not(.hidden)').length;
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    const isFiltered = activeFilter !== 'all';
    const suffix = isFiltered
      ? (visible === 1 ? this.t('routes_found_one') : this.t('routes_found_many'))
      : this.t('routes_count');

    countEl.textContent = `${visible} ${suffix}`;
  },

  _translateRouteCards(lang) {
    document.querySelectorAll('.dest-card[data-route-key]').forEach(card => {
      const routeKey = card.dataset.routeKey;
      const baseKey = `routes_${routeKey}`;

      this._setText(card, '.dest-badge', `${baseKey}_badge`, lang);
      this._setText(card, '.dest-time-badge', `${baseKey}_time`, lang);
      this._setText(card, '.dest-content h2', `${baseKey}_title`, lang);
      this._setText(card, '.dest-content p', `${baseKey}_desc`, lang);

      card.querySelectorAll('.dest-pill').forEach((pill, index) => {
        const val = this._getTranslation(`${baseKey}_pill_${index + 1}`, lang);
        if (val !== undefined) pill.textContent = val;
      });

      const buttonKey = routeKey === 'airport' ? 'dest_btn_airport' : 'dest_btn_wa';
      this._setButtonLabel(card.querySelector('.dest-btn'), buttonKey, lang);
    });
  },

  _setText(root, selector, key, lang = this.current) {
    const el = root.querySelector(selector);
    const val = this._getTranslation(key, lang);
    if (el && val !== undefined) el.textContent = val;
  },

  _setButtonLabel(button, key, lang = this.current) {
    const val = this._getTranslation(key, lang);
    if (!button || val === undefined) return;

    let label = button.querySelector('.dest-btn-label');
    if (!label) {
      Array.from(button.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.remove();
      });
      label = document.createElement('span');
      label.className = 'dest-btn-label';
      button.appendChild(label);
    }
    label.textContent = val;
  },

  _getTranslation(key, lang = this.current) {
    return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.es?.[key];
  },

  _getPageKey() {
    return window.location.pathname.toLowerCase().includes('rutas') ? 'rutas' : 'index';
  },

  _updateDocumentMeta(lang) {
    const pageKey = this._getPageKey();
    const seo = SEO_TRANSLATIONS[lang]?.[pageKey] || SEO_TRANSLATIONS.es[pageKey];
    if (!seo) return;

    document.title = seo.title;
    this._setMeta('name', 'description', seo.description);
    this._setMeta('property', 'og:title', seo.ogTitle);
    this._setMeta('property', 'og:description', seo.ogDescription);
    this._setMeta('property', 'og:locale', seo.locale);
    this._setMeta('property', 'og:image:alt', seo.imageAlt);
    this._setMeta('name', 'twitter:title', seo.ogTitle);
    this._setMeta('name', 'twitter:description', seo.ogDescription);
    this._setMeta('name', 'twitter:image:alt', seo.imageAlt);

    document.querySelectorAll('.whatsapp-float').forEach(link => {
      link.setAttribute('aria-label', seo.whatsappLabel);
    });
  },

  _setMeta(attr, key, content) {
    const meta = document.querySelector(`meta[${attr}="${key}"]`);
    if (meta && content) meta.setAttribute('content', content);
  },

  _getSavedLang() {
    try {
      return localStorage.getItem('rl_lang') || 'es';
    } catch {
      return 'es';
    }
  },

  _saveLang(lang) {
    try {
      localStorage.setItem('rl_lang', lang);
    } catch {
      // localStorage can be unavailable in restricted browser modes.
    }
  },

  _renderSelector() {
    // Crear el selector solo si no existe
    if (document.getElementById('lang-selector')) return;

    const langs = [
      { code: 'es', label: 'ES', flag: '🇨🇺' },
      { code: 'en', label: 'EN', flag: '🇬🇧' },
      { code: 'fr', label: 'FR', flag: '🇫🇷' },
    ];

    const wrapper = document.createElement('div');
    wrapper.id = 'lang-selector';
    wrapper.innerHTML = `
      <button id="lang-toggle" aria-label="Language selector">
        <span id="lang-current-flag"></span>
        <span id="lang-current-label"></span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" id="lang-chevron">
          <path d="M1 3l4 4 4-4"/>
        </svg>
      </button>
      <div id="lang-dropdown">
        ${langs.map(l => `
          <button class="lang-option" data-lang="${l.code}">
            <span>${l.flag}</span>
            <span>${l.label}</span>
          </button>
        `).join('')}
      </div>
    `;

    // Insertar antes del nav-cta
    const nav = document.querySelector('nav');
    if (nav) nav.appendChild(wrapper);

    // Styles inline (para no depender de un CSS adicional)
    const style = document.createElement('style');
    style.textContent = `
      #lang-selector {
        position: relative;
        margin-left: 8px;
      }
      #lang-toggle {
        display: flex; align-items: center; gap: 6px;
        background: rgba(201,151,58,0.12);
        border: 1px solid rgba(201,151,58,0.35);
        color: #E8B84B;
        padding: 6px 12px; border-radius: 6px;
        font-size: 0.8rem; font-weight: 600;
        cursor: pointer; font-family: 'DM Sans', sans-serif;
        transition: background 0.2s, border-color 0.2s;
        letter-spacing: 0.5px;
      }
      #lang-toggle:hover {
        background: rgba(201,151,58,0.22);
        border-color: rgba(201,151,58,0.6);
      }
      #lang-chevron { transition: transform 0.2s; stroke: currentColor; fill: none; stroke-width: 1.5; }
      #lang-selector.open #lang-chevron { transform: rotate(180deg); }
      #lang-dropdown {
        display: none; flex-direction: column;
        position: absolute; top: calc(100% + 8px); right: 0;
        background: #1A0F07;
        border: 1px solid rgba(201,151,58,0.3);
        border-radius: 8px; overflow: hidden;
        min-width: 100px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        z-index: 300;
      }
      #lang-selector.open #lang-dropdown { display: flex; }
      .lang-option {
        display: flex; align-items: center; gap: 8px;
        padding: 10px 16px; border: none; background: transparent;
        color: rgba(255,253,247,0.7); font-size: 0.82rem; font-weight: 500;
        cursor: pointer; font-family: 'DM Sans', sans-serif;
        transition: background 0.15s, color 0.15s;
        text-align: left;
      }
      .lang-option:hover { background: rgba(201,151,58,0.12); color: #E8B84B; }
      .lang-option.active { color: #E8B84B; background: rgba(201,151,58,0.08); }
    `;
    document.head.appendChild(style);

    // Eventos
    document.getElementById('lang-toggle').addEventListener('click', (e) => {
      e.stopPropagation();
      wrapper.classList.toggle('open');
    });

    document.addEventListener('click', () => wrapper.classList.remove('open'));

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setLang(btn.dataset.lang);
        wrapper.classList.remove('open');
      });
    });

    this._updateSelector(this.current);
  },

  _updateSelector(lang) {
    const flags = { es: '🇨🇺', en: '🇬🇧', fr: '🇫🇷' };
    const flagEl = document.getElementById('lang-current-flag');
    const labelEl = document.getElementById('lang-current-label');
    if (flagEl) flagEl.textContent = flags[lang] || '🌐';
    if (labelEl) labelEl.textContent = lang.toUpperCase();

    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }
};

// ─── Inicializar al cargar el DOM ─────────────────────────────────────────────
if (typeof window !== 'undefined') window.I18N = I18N;
document.addEventListener('DOMContentLoaded', () => I18N.init());
