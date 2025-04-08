// import LocalizedStrings from 'localized-strings'
// import * as langHelper from '@/common/langHelper'
// import env from '@/config/env.config'
// import * as PaymentService from '@/services/PaymentService'

// const currency = PaymentService.getCurrencySymbol()

// const depositFilterValue1 = await PaymentService.convertPrice(env.DEPOSIT_FILTER_VALUE_1)
// const depositFilterValue2 = await PaymentService.convertPrice(env.DEPOSIT_FILTER_VALUE_2)
// const depositFilterValue3 = await PaymentService.convertPrice(env.DEPOSIT_FILTER_VALUE_3)

// const strings = new LocalizedStrings({
//   fr: {
//     NEW_CAR: 'Nouvelle voiture',
//     DELETE_CAR: 'Êtes-vous sûr de vouloir supprimer cette voiture ?',
//     FUEL_POLICY: 'Politique carburant',
//     DIESEL: 'Diesel',
//     GASOLINE: 'Essence',
//     ELECTRIC: 'Électrique',
//     HYBRID: 'Hybride',
//     PLUG_IN_HYBRID: 'Hybride rechargeable',
//     UNKNOWN: 'Non spécifié',
//     DIESEL_SHORT: 'D',
//     GASOLINE_SHORT: 'E',
//     ELECTRIC_SHORT: 'ELEC',
//     HYBRID_SHORT: 'H',
//     PLUG_IN_HYBRID_SHORT: 'HR',
//     GEARBOX_MANUAL: 'Manuelle',
//     GEARBOX_AUTOMATIC: 'Automatique',
//     GEARBOX_MANUAL_SHORT: 'M',
//     GEARBOX_AUTOMATIC_SHORT: 'A',
//     FUEL_POLICY_LIKE_FOR_LIKE: 'Même niveau',
//     FUEL_POLICY_FREE_TANK: 'Plein inclus',
//     FUEL_POLICY_FULL_TO_FULL: 'Plein/Plein',
//     FUEL_POLICY_FULL_TO_EMPTY: 'Plein/Vide',
//     FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP: 'Cette voiture est fournie avec du carburant dans le réservoir et doit être rendu avec la même quantité de carburant.',
//     FUEL_POLICY_FREE_TANK_TOOLTIP: 'Le prix inclut un plein de carburant',
//     FUEL_POLICY_FULL_TO_FULL_TOOLTIP: 'Cette voiture est fournie avec le plein de carburant dans le réservoir et doit être rendu avec le plein de carburant.',
//     FUEL_POLICY_FULL_TO_EMPTY_TOOLTIP: 'Cette voiture est fournie avec le plein de carburant dans le réservoir et doit être rendu avec réservoir vide.',
//     DIESEL_TOOLTIP: 'Cette voiture a un moteur diesel',
//     GASOLINE_TOOLTIP: 'Cette voiture a un moteur essence',
//     ELECTRIC_TOOLTIP: 'Cette voiture est électrique',
//     HYBRID_TOOLTIP: 'Cette voiture est hybride',
//     PLUG_IN_HYBRID_TOOLTIP: 'Cette voiture est hybride rechargeable',
//     GEARBOX_MANUAL_TOOLTIP: 'Cette voiture a une transmission manuelle',
//     GEARBOX_AUTOMATIC_TOOLTIP: 'Cette voiture a une transmission automatique',
//     SEATS_TOOLTIP_1: 'Cette voiture a ',
//     SEATS_TOOLTIP_2: 'sièges',
//     DOORS_TOOLTIP_1: 'Cette voiture a ',
//     DOORS_TOOLTIP_2: 'portes',
//     AIRCON_TOOLTIP: 'Cette voiture a de la climatisation',
//     MILEAGE: 'Kilométrage',
//     MILEAGE_UNIT: 'KM/jour',
//     UNLIMITED: 'Illimité',
//     LIMITED: 'Limité',
//     CANCELLATION: 'Annulation',
//     CANCELLATION_TOOLTIP: 'La réservation peut être annulée avant la date de commencement de la location.',
//     AMENDMENTS: 'Modifications',
//     AMENDMENTS_TOOLTIP: 'La réservation peut être modifiée avant la date de commencement de la location.',
//     THEFT_PROTECTION: 'Protection contre le vol',
//     THEFT_PROTECTION_TOOLTIP: 'La location peut inclure une protection contre le vol.',
//     COLLISION_DAMAGE_WAVER: 'Couverture en cas de collision',
//     COLLISION_DAMAGE_WAVER_TOOLTIP: 'La location peut inclure une couverture en cas de collision.',
//     FULL_INSURANCE: 'Assurance Tous Risques',
//     FULL_INSURANCE_TOOLTIP: 'La location peut inclure une couverture en cas de collision, de dommages et vol du véhicule.',
//     ADDITIONAL_DRIVER: 'Conducteur supplémentaire',
//     INCLUDED: 'Inclus',
//     UNAVAILABLE: 'Indisponible',
//     CAR_AVAILABLE: 'Disponible à la location',
//     CAR_AVAILABLE_TOOLTIP: 'Cette voiture est disponible pour la location.',
//     CAR_UNAVAILABLE: 'Indisponible pour la location',
//     CAR_UNAVAILABLE_TOOLTIP: "Cette voiture n'est pas disponible pour la location.",
//     VIEW_CAR: 'Voir cette voiture',
//     EMPTY_LIST: 'Pas de voitures.',
//     BOOK: 'Réserver',
//     PRICE_DAYS_PART_1: 'Prix pour',
//     PRICE_DAYS_PART_2: 'jour',
//     PRICE_PER_DAY: 'Prix par jour :',
//     GEARBOX: 'Transmission',
//     ENGINE: 'Moteur',
//     DEPOSIT: 'Dépôt de garantie',
//     LESS_THAN_VALUE_1: `Moins de ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue1}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     LESS_THAN_VALUE_2: `Moins de ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue2}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     LESS_THAN_VALUE_3: `Moins de ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue3}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     TRIPS: 'locations',
//     CO2: 'Effet CO2',
//     FROM_YOU: ' de vous',
//     TITLE_1: 'Auto ',
//     TITLE_2: ' pour vous',
//     TITLE_CAR_AVAILABLE: 'voiture disponible',
//     TITLE_CARS_AVAILABLE: 'voitures disponibles',
//     DETAILS: 'Détails',
//     FULLY_BOOKED: 'Déjà Réservée',
//     COMING_SOON: 'Bientôt Disponible',
//     CAR_RANGE_MINI: 'Voiture',
//     CAR_RANGE_MIDI: 'SUV',
//     CAR_RANGE_MAXI: 'Fourgon',
//     CAR_RANGE_SCOOTER: 'Scooter',
//     CAR_RANGE_BUS: 'Bus',
//     CAR_RANGE_TRUCK: 'Camion',
//     CAR_RANGE_CARAVAN: 'Caravane',
//   },
//   en: {
//     NEW_CAR: 'New car',
//     DELETE_CAR: 'Are you sure you want to delete this car?',
//     FUEL_POLICY: 'Fuel policy',
//     DIESEL: 'Diesel',
//     GASOLINE: 'Gasoline',
//     ELECTRIC: 'Electric',
//     HYBRID: 'Hybrid',
//     PLUG_IN_HYBRID: 'Plug-in hybrid',
//     UNKNOWN: 'Not specified',
//     DIESEL_SHORT: 'D',
//     GASOLINE_SHORT: 'G',
//     ELECTRIC_SHORT: 'E',
//     HYBRID_SHORT: 'H',
//     PLUG_IN_HYBRID_SHORT: 'PH',
//     GEARBOX_MANUAL: 'Manual',
//     GEARBOX_AUTOMATIC: 'Automatic',
//     GEARBOX_MANUAL_SHORT: 'M',
//     GEARBOX_AUTOMATIC_SHORT: 'A',
//     FUEL_POLICY_LIKE_FOR_LIKE: 'Like for Like',
//     FUEL_POLICY_FREE_TANK: 'Free tank',
//     FUEL_POLICY_FULL_TO_FULL: 'Full to Full',
//     FUEL_POLICY_FULL_TO_EMPTY: 'Full to Empty',
//     FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP: 'This car is supplied with fuel and must be returned with the same amount of fuel.',
//     FUEL_POLICY_FREE_TANK_TOOLTIP: 'The price includes a full tank of fuel.',
//     FUEL_POLICY_FULL_TO_FULL_TOOLTIP: 'This car is supplied with a full tank of fuel and must be returned with a full tank of fuel.',
//     FUEL_POLICY_FULL_TO_EMPTY_TOOLTIP: 'This car is supplied with a full tank of fuel and must be returned with an empty tank.',
//     DIESEL_TOOLTIP: 'This car has a diesel engine',
//     GASOLINE_TOOLTIP: 'This car has a gasoline engine',
//     ELECTRIC_TOOLTIP: 'This car is electric',
//     HYBRID_TOOLTIP: 'This car is hybrid',
//     PLUG_IN_HYBRID_TOOLTIP: 'This car is plug-in hybrid',
//     GEARBOX_MANUAL_TOOLTIP: 'This car has a manual gearbox',
//     GEARBOX_AUTOMATIC_TOOLTIP: 'This car has an automatic gearbox',
//     SEATS_TOOLTIP_1: 'This car has ',
//     SEATS_TOOLTIP_2: 'seats',
//     DOORS_TOOLTIP_1: 'This car has ',
//     DOORS_TOOLTIP_2: 'doors',
//     AIRCON_TOOLTIP: 'This car has aircon',
//     MILEAGE: 'Mileage',
//     MILEAGE_UNIT: 'KM/day',
//     UNLIMITED: 'Unlimited',
//     LIMITED: 'Limited',
//     CANCELLATION: 'Cancellation',
//     CANCELLATION_TOOLTIP: 'The booking can be canceled before the start date of the rental.',
//     AMENDMENTS: 'Amendments',
//     AMENDMENTS_TOOLTIP: 'The booking can be modified before the start date of the rental.',
//     THEFT_PROTECTION: 'Theft protection',
//     THEFT_PROTECTION_TOOLTIP: 'Rental may include theft protection.',
//     COLLISION_DAMAGE_WAVER: 'Collision damage waiver',
//     COLLISION_DAMAGE_WAVER_TOOLTIP: 'Rental may include collision damage waiver.',
//     FULL_INSURANCE: 'Full insurance',
//     FULL_INSURANCE_TOOLTIP: 'The rental may include collision damage waiver and theft protection of the vehicle.',
//     ADDITIONAL_DRIVER: 'Additional driver',
//     INCLUDED: 'Included',
//     UNAVAILABLE: 'Unavailable',
//     CAR_AVAILABLE: 'Available for rental',
//     CAR_AVAILABLE_TOOLTIP: 'This car is available for rental.',
//     CAR_UNAVAILABLE: 'Unavailable for rental',
//     CAR_UNAVAILABLE_TOOLTIP: 'This car is unavailable for rental.',
//     VIEW_CAR: 'View this car',
//     EMPTY_LIST: 'No cars.',
//     BOOK: 'Choose this car',
//     PRICE_DAYS_PART_1: 'Price for',
//     PRICE_DAYS_PART_2: 'day',
//     PRICE_PER_DAY: 'Price per day:',
//     GEARBOX: 'Gearbox',
//     ENGINE: 'Engine',
//     DEPOSIT: 'Deposit at pick-up',
//     LESS_THAN_VALUE_1: `Less than ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue1}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     LESS_THAN_VALUE_2: `Less than ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue2}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     LESS_THAN_VALUE_3: `Less than ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue3}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     TRIPS: 'trips',
//     CO2: 'CO2 effect',
//     FROM_YOU: ' from you',
//     TITLE_1: 'Auto ',
//     TITLE_2: ' for you',
//     TITLE_CAR_AVAILABLE: 'car available',
//     TITLE_CARS_AVAILABLE: 'cars available',
//     DETAILS: 'Details',
//     FULLY_BOOKED: 'Fully Booked',
//     COMING_SOON: 'Coming Soon',
//     CAR_RANGE_MINI: 'Car',
//     CAR_RANGE_MIDI: 'SUV',
//     CAR_RANGE_MAXI: 'Van',
//     CAR_RANGE_SCOOTER: 'Scooter',
//     CAR_RANGE_BUS: 'Bus',
//     CAR_RANGE_TRUCK: 'Truck',
//     CAR_RANGE_CARAVAN: 'Caravan',
//   },
//   es: {
//     NEW_CAR: 'Coche nuevo',
//     DELETE_CAR: '¿Está seguro de que desea eliminar este coche?',
//     FUEL_POLICY: 'Política de combustible',
//     DIESEL: 'Diésel',
//     GASOLINE: 'Gasolina',
//     ELECTRIC: 'Eléctrico',
//     HYBRID: 'Híbrido',
//     PLUG_IN_HYBRID: 'Híbrido enchufable',
//     UNKNOWN: 'No especificado',
//     DIESEL_SHORT: 'D',
//     GASOLINE_SHORT: 'G',
//     ELECTRIC_SHORT: 'E',
//     HYBRID_SHORT: 'H',
//     PLUG_IN_HYBRID_SHORT: 'HE',
//     GEARBOX_MANUAL: 'Manual',
//     GEARBOX_AUTOMATIC: 'Automático',
//     GEARBOX_MANUAL_SHORT: 'M',
//     GEARBOX_AUTOMATIC_SHORT: 'A',
//     FUEL_POLICY_LIKE_FOR_LIKE: 'Igual que',
//     FUEL_POLICY_FREE_TANK: 'Tanque gratis',
//     FUEL_POLICY_FULL_TO_FULL: 'Lleno/Lleno',
//     FUEL_POLICY_FULL_TO_EMPTY: 'Lleno/Vacío',
//     FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP: 'Este coche se suministra con combustible y debe devolverse con la misma cantidad de combustible.',
//     FUEL_POLICY_FREE_TANK_TOOLTIP: 'El precio incluye un tanque lleno de combustible.',
//     FUEL_POLICY_FULL_TO_FULL_TOOLTIP: 'Este coche se entrega con un tanque de combustible lleno y debe devolverse con un tanque de combustible lleno.',
//     FUEL_POLICY_FULL_TO_EMPTY_TOOLTIP: 'Este coche se entrega con un tanque de combustible lleno y debe devolverse con un tanque de combustible lleno. un tanque vacío.',
//     DIESEL_TOOLTIP: 'Este coche tiene un motor diésel',
//     GASOLINE_TOOLTIP: 'Este coche tiene un motor de gasolina',
//     ELECTRIC_TOOLTIP: 'Este coche es eléctrico',
//     HYBRID_TOOLTIP: 'Este coche es híbrido',
//     PLUG_IN_HYBRID_TOOLTIP: 'Este coche es híbrido enchufable',
//     GEARBOX_MANUAL_TOOLTIP: 'Este coche tiene una caja de cambios manual',
//     GEARBOX_AUTOMATIC_TOOLTIP: 'Este coche tiene una caja de cambios automática',
//     SEATS_TOOLTIP_1: 'Este coche tiene ',
//     SEATS_TOOLTIP_2: 'asientos',
//     DOORS_TOOLTIP_1: 'Este coche tiene ',
//     DOORS_TOOLTIP_2: 'puertas',
//     AIRCON_TOOLTIP: 'Este coche tiene aire acondicionado',
//     MILEAGE: 'Kilometraje',
//     MILEAGE_UNIT: 'KM/día',
//     UNLIMITED: 'Ilimitado',
//     LIMITED: 'Limitado',
//     CANCELLATION: 'Cancelación',
//     CANCELLATION_TOOLTIP: 'La reserva puede ser cancelada antes de la fecha de inicio del alquiler.',
//     AMENDMENTS: 'Modificaciones',
//     AMENDMENTS_TOOLTIP: 'La reserva puede ser modificada antes de la fecha de inicio del alquiler.',
//     THEFT_PROTECTION: 'Protección contra robo',
//     THEFT_PROTECTION_TOOLTIP: 'El alquiler puede incluir protección contra robo.',
//     COLLISION_DAMAGE_WAVER: 'Renuncia de daños por colisión',
//     COLLISION_DAMAGE_WAVER_TOOLTIP: 'El alquiler puede incluir una renuncia por daños por colisión.',
//     FULL_INSURANCE: 'Seguro a todo riesgo',
//     FULL_INSURANCE_TOOLTIP: 'El alquiler puede incluir renuncia por colisión y protección contra robo del vehículo.',
//     ADDITIONAL_DRIVER: 'Conductor adicional',
//     INCLUDED: 'Incluido',
//     UNAVAILABLE: 'No disponible',
//     CAR_AVAILABLE: 'Disponible para alquiler',
//     CAR_AVAILABLE_TOOLTIP: 'Este coche está disponible para alquiler.',
//     CAR_UNAVAILABLE: 'No disponible para alquiler',
//     CAR_UNAVAILABLE_TOOLTIP: 'Este coche no está disponible para alquiler.',
//     VIEW_CAR: 'Ver este coche',
//     EMPTY_LIST: 'No hay coches.',
//     BOOK: 'Elegir este coche',
//     PRICE_DAYS_PART_1: 'Precio por',
//     PRICE_DAYS_PART_2: 'día',
//     PRICE_PER_DAY: 'Precio por día:',
//     GEARBOX: 'Caja de cambios',
//     ENGINE: 'Motor',
//     DEPOSIT: 'Depósito al recoger',
//     LESS_THAN_VALUE_1: `Menos de ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue1}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     LESS_THAN_VALUE_2: `Menos de ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue2}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     LESS_THAN_VALUE_3: `Menos de ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue3}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
//     TRIPS: 'viajes',
//     CO2: 'Efecto CO2',
//     FROM_YOU: ' de ti',
//     TITLE_1: 'Auto ',
//     TITLE_2: ' para ti',
//     TITLE_CAR_AVAILABLE: 'coche disponible',
//     TITLE_CARS_AVAILABLE: 'coches disponibles',
//     DETAILS: 'Detalles',
//     FULLY_BOOKED: 'Ya Reservado',
//     COMING_SOON: 'Próximamente',
//     CAR_RANGE_MINI: 'Auto',
//     CAR_RANGE_MIDI: 'Todoterreno',
//     CAR_RANGE_MAXI: 'furgoneta',
//     CAR_RANGE_SCOOTER: 'Scooter',
//     CAR_RANGE_BUS: 'Autobús',
//     CAR_RANGE_TRUCK: 'Camión',
//     CAR_RANGE_CARAVAN: 'Caravana',
//   }
// })

// langHelper.setLanguage(strings)
// export { strings }

import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'
import env from '@/config/env.config'
import * as PaymentService from '@/services/PaymentService'

const currency = PaymentService.getCurrencySymbol()

const depositFilterValue1 = await PaymentService.convertPrice(env.DEPOSIT_FILTER_VALUE_1)
const depositFilterValue2 = await PaymentService.convertPrice(env.DEPOSIT_FILTER_VALUE_2)
const depositFilterValue3 = await PaymentService.convertPrice(env.DEPOSIT_FILTER_VALUE_3)

const strings = new LocalizedStrings({
  en: {
    NEW_CAR: 'New car',
    DELETE_CAR: 'Are you sure you want to delete this car?',
    FUEL_POLICY: 'Fuel policy',
    DIESEL: 'Diesel',
    GASOLINE: 'Gasoline',
    ELECTRIC: 'Electric',
    HYBRID: 'Hybrid',
    PLUG_IN_HYBRID: 'Plug-in hybrid',
    UNKNOWN: 'Not specified',
    DIESEL_SHORT: 'D',
    GASOLINE_SHORT: 'G',
    ELECTRIC_SHORT: 'E',
    HYBRID_SHORT: 'H',
    PLUG_IN_HYBRID_SHORT: 'PH',
    GEARBOX_MANUAL: 'Manual',
    GEARBOX_AUTOMATIC: 'Automatic',
    GEARBOX_MANUAL_SHORT: 'M',
    GEARBOX_AUTOMATIC_SHORT: 'A',
    FUEL_POLICY_LIKE_FOR_LIKE: 'Like for Like',
    FUEL_POLICY_FREE_TANK: 'Free tank',
    FUEL_POLICY_FULL_TO_FULL: 'Full to Full',
    FUEL_POLICY_FULL_TO_EMPTY: 'Full to Empty',
    FUEL_POLICY_LIKE_FOR_LIKE_TOOLTIP: 'This car is supplied with fuel and must be returned with the same amount of fuel.',
    FUEL_POLICY_FREE_TANK_TOOLTIP: 'The price includes a full tank of fuel.',
    FUEL_POLICY_FULL_TO_FULL_TOOLTIP: 'This car is supplied with a full tank of fuel and must be returned with a full tank of fuel.',
    FUEL_POLICY_FULL_TO_EMPTY_TOOLTIP: 'This car is supplied with a full tank of fuel and must be returned with an empty tank.',
    DIESEL_TOOLTIP: 'This car has a diesel engine',
    GASOLINE_TOOLTIP: 'This car has a gasoline engine',
    ELECTRIC_TOOLTIP: 'This car is electric',
    HYBRID_TOOLTIP: 'This car is hybrid',
    PLUG_IN_HYBRID_TOOLTIP: 'This car is plug-in hybrid',
    GEARBOX_MANUAL_TOOLTIP: 'This car has a manual gearbox',
    GEARBOX_AUTOMATIC_TOOLTIP: 'This car has an automatic gearbox',
    SEATS_TOOLTIP_1: 'This car has ',
    SEATS_TOOLTIP_2: 'seats',
    DOORS_TOOLTIP_1: 'This car has ',
    DOORS_TOOLTIP_2: 'doors',
    AIRCON_TOOLTIP: 'This car has aircon',
    MILEAGE: 'Mileage',
    MILEAGE_UNIT: 'KM/day',
    UNLIMITED: 'Unlimited',
    LIMITED: 'Limited',
    CANCELLATION: 'Cancellation',
    CANCELLATION_TOOLTIP: 'The booking can be canceled before the start date of the rental.',
    AMENDMENTS: 'Amendments',
    AMENDMENTS_TOOLTIP: 'The booking can be modified before the start date of the rental.',
    THEFT_PROTECTION: 'Theft protection',
    THEFT_PROTECTION_TOOLTIP: 'Rental may include theft protection.',
    COLLISION_DAMAGE_WAVER: 'Collision damage waiver',
    COLLISION_DAMAGE_WAVER_TOOLTIP: 'Rental may include collision damage waiver.',
    FULL_INSURANCE: 'Full insurance',
    FULL_INSURANCE_TOOLTIP: 'The rental may include collision damage waiver and theft protection of the vehicle.',
    ADDITIONAL_DRIVER: 'Additional driver',
    INCLUDED: 'Included',
    UNAVAILABLE: 'Unavailable',
    CAR_AVAILABLE: 'Available for rental',
    CAR_AVAILABLE_TOOLTIP: 'This car is available for rental.',
    CAR_UNAVAILABLE: 'Unavailable for rental',
    CAR_UNAVAILABLE_TOOLTIP: 'This car is unavailable for rental.',
    VIEW_CAR: 'View this car',
    EMPTY_LIST: 'No cars.',
    BOOK: 'Choose this car',
    PRICE_DAYS_PART_1: 'Price for',
    PRICE_DAYS_PART_2: 'day',
    PRICE_PER_DAY: 'Price per day:',
    GEARBOX: 'Gearbox',
    ENGINE: 'Engine',
    DEPOSIT: 'Deposit at pick-up',
    LESS_THAN_VALUE_1: `Less than ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue1}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
    LESS_THAN_VALUE_2: `Less than ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue2}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
    LESS_THAN_VALUE_3: `Less than ${PaymentService.currencyRTL() ? currency : ''}${depositFilterValue3}${!PaymentService.currencyRTL() ? (` ${currency}`) : ''}`,
    TRIPS: 'trips',
    CO2: 'CO2 effect',
    FROM_YOU: ' from you',
    TITLE_1: 'Auto ',
    TITLE_2: ' for you',
    TITLE_CAR_AVAILABLE: 'car available',
    TITLE_CARS_AVAILABLE: 'cars available',
    DETAILS: 'Details',
    FULLY_BOOKED: 'Fully Booked',
    COMING_SOON: 'Coming Soon',
    CAR_RANGE_MINI: 'Car',
    CAR_RANGE_MIDI: 'SUV',
    CAR_RANGE_MAXI: 'Van',
    CAR_RANGE_SCOOTER: 'Scooter',
    CAR_RANGE_BUS: 'Bus',
    CAR_RANGE_TRUCK: 'Truck',
    CAR_RANGE_CARAVAN: 'Caravan',
  }
})

langHelper.setLanguage(strings)
export { strings }
