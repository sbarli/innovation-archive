const { agriculture } = require('./agriculture.js');
const { ai } = require('./ai.js');
const { alchemy } = require('./alchemy.js');
const { anatomy } = require('./anatomy.js');
const { antibiotics } = require('./antibiotics.js');
const { archery } = require('./archery.js');
const { astronomy } = require('./astronomy.js');
const { atomicTheory } = require('./atomic-theory.js');
const { banking } = require('./banking.js');
const { bicycle } = require('./bicycle.js');
const { bioengineering } = require('./bioengineering.js');
const { calendar } = require('./calendar.js');
const { canalBuilding } = require('./canal-building.js');
const { canning } = require('./canning.js');
const { chemistry } = require('./chemistry.js');
const { cityStates } = require('./city-states.js');
const { classification } = require('./classification.js');
const { clothing } = require('./clothing.js');
const { coal } = require('./coal.js');
const { codeOfLaws } = require('./code-of-laws.js');
const { collaboration } = require('./collaboration.js');
const { colonialism } = require('./colonialism.js');
const { combustion } = require('./combustion.js');
const { compass } = require('./compass.js');
const { composites } = require('./composites.js');
const { computers } = require('./computers.js');
const { construction } = require('./construction.js');
const { corporations } = require('./corporations.js');
const { currency } = require('./currency.js');
const { databases } = require('./databases.js');
const { democracy } = require('./democracy.js');
const { domestication } = require('./domestication.js');
const { ecology } = require('./ecology.js');
const { education } = require('./education.js');
const { electricity } = require('./electricity.js');
const { emancipation } = require('./emancipation.js');
const { empiricism } = require('./empiricism.js');
const { encyclopedia } = require('./encyclopedia.js');
const { engineering } = require('./engineering.js');
const { enterprise } = require('./enterprise.js');
const { evolution } = require('./evolution.js');
const { experimentation } = require('./experimentation.js');
const { explosives } = require('./explosives.js');
const { fermenting } = require('./fermenting.js');
const { feudalism } = require('./feudalism.js');
const { fission } = require('./fission.js');
const { flight } = require('./flight.js');
const { genetics } = require('./genetics.js');
const { globalization } = require('./globalization.js');
const { gunpowder } = require('./gunpowder.js');
const { industrialization } = require('./industrialization.js');
const { invention } = require('./invention.js');
const { lighting } = require('./lighting.js');
const { machineTools } = require('./machine-tools.js');
const { machinery } = require('./machinery.js');
const { mapmaking } = require('./mapmaking.js');
const { masonry } = require('./masonry.js');
const { massMedia } = require('./mass-media.js');
const { mathematics } = require('./mathematics.js');
const { measurement } = require('./measurement.js');
const { medicine } = require('./medicine.js');
const { metalworking } = require('./metalworking.js');
const { metricSystem } = require('./metric-system.js');
const { miniaturization } = require('./miniaturization.js');
const { mobility } = require('./mobility.js');
const { monotheism } = require('./monotheism.js');
const { mysticism } = require('./mysticism.js');
const { navigation } = require('./navigation.js');
const { oars } = require('./oars.js');
const { optics } = require('./optics.js');
const { paper } = require('./paper.js');
const { perspective } = require('./perspective.js');
const { philosophy } = require('./philosophy.js');
const { physics } = require('./physics.js');
const { pottery } = require('./pottery.js');
const { printingPress } = require('./printing-press.js');
const { publications } = require('./publications.js');
const { quantumTheory } = require('./quantum-theory.js');
const { railroad } = require('./railroad.js');
const { reformation } = require('./reformation.js');
const { refrigeration } = require('./refrigeration.js');
const { roadBuilding } = require('./road-building.js');
const { robotics } = require('./robotics.js');
const { rocketry } = require('./rocketry.js');
const { sailing } = require('./sailing.js');
const { sanitation } = require('./sanitation.js');
const { satellites } = require('./satellites.js');
const { selfService } = require('./self-service.js');
const { services } = require('./services.js');
const { skyscrapers } = require('./skyscrapers.js');
const { socialism } = require('./socialism.js');
const { societies } = require('./societies.js');
const { software } = require('./software.js');
const { specialization } = require('./specialization.js');
const { statistics } = require('./statistics.js');
const { steamEngine } = require('./steam-engine.js');
const { stemCells } = require('./stem-cells.js');
const { suburbia } = require('./suburbia.js');
const { theInternet } = require('./the-internet.js');
const { thePirateCode } = require('./the-pirate-code.js');
const { theWheel } = require('./the-wheel.js');
const { tools } = require('./tools.js');
const { translation } = require('./translation.js');
const { vaccination } = require('./vaccination.js');
const { writing } = require('./writing.js');

const CardIds = {
  WRITING: 'WRITING',
  CLOTHING: 'CLOTHING',
  MASONRY: 'MASONRY',
  METALWORKING: 'METALWORKING',
  CODE_OF_LAWS: 'CODE_OF_LAWS',
  SAILING: 'SAILING',
  POTTERY: 'POTTERY',
  OARS: 'OARS',
  ARCHERY: 'ARCHERY',
  AGRICULTURE: 'AGRICULTURE',
  MYSTICISM: 'MYSTICISM',
  CITY_STATES: 'CITY_STATES',
  DOMESTICATION: 'DOMESTICATION',
  TOOLS: 'TOOLS',
  THE_WHEEL: 'THE_WHEEL',
  CURRENCY: 'CURRENCY',
  CANAL_BUILDING: 'CANAL_BUILDING',
  MONOTHEISM: 'MONOTHEISM',
  ROAD_BUILDING: 'ROAD_BUILDING',
  CONSTRUCTION: 'CONSTRUCTION',
  FERMENTING: 'FERMENTING',
  CALENDAR: 'CALENDAR',
  PHILOSOPHY: 'PHILOSOPHY',
  MATHEMATICS: 'MATHEMATICS',
  MAPMAKING: 'MAPMAKING',
  PAPER: 'PAPER',
  ENGINEERING: 'ENGINEERING',
  TRANSLATION: 'TRANSLATION',
  FEUDALISM: 'FEUDALISM',
  MACHINERY: 'MACHINERY',
  MEDICINE: 'MEDICINE',
  OPTICS: 'OPTICS',
  COMPASS: 'COMPASS',
  EDUCATION: 'EDUCATION',
  ALCHEMY: 'ALCHEMY',
  GUNPOWDER: 'GUNPOWDER',
  INVENTION: 'INVENTION',
  COLONIALISM: 'COLONIALISM',
  REFORMATION: 'REFORMATION',
  ANATOMY: 'ANATOMY',
  ENTERPRISE: 'ENTERPRISE',
  PERSPECTIVE: 'PERSPECTIVE',
  NAVIGATION: 'NAVIGATION',
  PRINTING_PRESS: 'PRINTING_PRESS',
  EXPERIMENTATION: 'EXPERIMENTATION',
  ASTRONOMY: 'ASTRONOMY',
  MEASUREMENT: 'MEASUREMENT',
  STATISTICS: 'STATISTICS',
  CHEMISTRY: 'CHEMISTRY',
  COAL: 'COAL',
  THE_PIRATE_CODE: 'THE_PIRATE_CODE',
  STEAM_ENGINE: 'STEAM_ENGINE',
  BANKING: 'BANKING',
  PHYSICS: 'PHYSICS',
  SOCIETIES: 'SOCIETIES',
  ATOMIC_THEORY: 'ATOMIC_THEORY',
  EMANCIPATION: 'EMANCIPATION',
  VACCINATION: 'VACCINATION',
  CLASSIFICATION: 'CLASSIFICATION',
  METRIC_SYSTEM: 'METRIC_SYSTEM',
  ENCYCLOPEDIA: 'ENCYCLOPEDIA',
  MACHINE_TOOLS: 'MACHINE_TOOLS',
  INDUSTRIALIZATION: 'INDUSTRIALIZATION',
  DEMOCRACY: 'DEMOCRACY',
  CANNING: 'CANNING',
  COMBUSTION: 'COMBUSTION',
  BICYCLE: 'BICYCLE',
  EVOLUTION: 'EVOLUTION',
  SANITATION: 'SANITATION',
  EXPLOSIVES: 'EXPLOSIVES',
  ELECTRICITY: 'ELECTRICITY',
  PUBLICATIONS: 'PUBLICATIONS',
  LIGHTING: 'LIGHTING',
  RAILROAD: 'RAILROAD',
  REFRIGERATION: 'REFRIGERATION',
  ANTIBIOTICS: 'ANTIBIOTICS',
  MOBILITY: 'MOBILITY',
  FLIGHT: 'FLIGHT',
  ROCKETRY: 'ROCKETRY',
  SKYSCRAPERS: 'SKYSCRAPERS',
  SOCIALISM: 'SOCIALISM',
  CORPORATIONS: 'CORPORATIONS',
  MASS_MEDIA: 'MASS_MEDIA',
  EMPIRICISM: 'EMPIRICISM',
  QUANTUM_THEORY: 'QUANTUM_THEORY',
  COMPUTERS: 'COMPUTERS',
  COLLABORATION: 'COLLABORATION',
  GENETICS: 'GENETICS',
  SERVICES: 'SERVICES',
  SPECIALIZATION: 'SPECIALIZATION',
  SUBURBIA: 'SUBURBIA',
  ECOLOGY: 'ECOLOGY',
  FISSION: 'FISSION',
  SATELLITES: 'SATELLITES',
  COMPOSITES: 'COMPOSITES',
  ROBOTICS: 'ROBOTICS',
  BIOENGINEERING: 'BIOENGINEERING',
  DATABASES: 'DATABASES',
  MINIATURIZATION: 'MINIATURIZATION',
  SOFTWARE: 'SOFTWARE',
  SELF_SERVICE: 'SELF_SERVICE',
  AI: 'AI',
  STEM_CELLS: 'STEM_CELLS',
  GLOBALIZATION: 'GLOBALIZATION',
  THE_INTERNET: 'THE_INTERNET',
}

module.exports = {
  [CardIds.WRITING]: writing,
  [CardIds.CLOTHING]: clothing,
  [CardIds.MASONRY]: masonry,
  [CardIds.METALWORKING]: metalworking,
  [CardIds.CODE_OF_LAWS]: codeOfLaws,
  [CardIds.SAILING]: sailing,
  [CardIds.POTTERY]: pottery,
  [CardIds.OARS]: oars,
  [CardIds.ARCHERY]: archery,
  [CardIds.AGRICULTURE]: agriculture,
  [CardIds.MYSTICISM]: mysticism,
  [CardIds.CITY_STATES]: cityStates,
  [CardIds.DOMESTICATION]: domestication,
  [CardIds.TOOLS]: tools,
  [CardIds.THE_WHEEL]: theWheel,
  [CardIds.CURRENCY]: currency,
  [CardIds.CANAL_BUILDING]: canalBuilding,
  [CardIds.MONOTHEISM]: monotheism,
  [CardIds.ROAD_BUILDING]: roadBuilding,
  [CardIds.CONSTRUCTION]: construction,
  [CardIds.FERMENTING]: fermenting,
  [CardIds.CALENDAR]: calendar,
  [CardIds.PHILOSOPHY]: philosophy,
  [CardIds.MATHEMATICS]: mathematics,
  [CardIds.MAPMAKING]: mapmaking,
  [CardIds.PAPER]: paper,
  [CardIds.ENGINEERING]: engineering,
  [CardIds.TRANSLATION]: translation,
  [CardIds.FEUDALISM]: feudalism,
  [CardIds.MACHINERY]: machinery,
  [CardIds.MEDICINE]: medicine,
  [CardIds.OPTICS]: optics,
  [CardIds.COMPASS]: compass,
  [CardIds.EDUCATION]: education,
  [CardIds.ALCHEMY]: alchemy,
  [CardIds.GUNPOWDER]: gunpowder,
  [CardIds.INVENTION]: invention,
  [CardIds.COLONIALISM]: colonialism,
  [CardIds.REFORMATION]: reformation,
  [CardIds.ANATOMY]: anatomy,
  [CardIds.ENTERPRISE]: enterprise,
  [CardIds.PERSPECTIVE]: perspective,
  [CardIds.NAVIGATION]: navigation,
  [CardIds.PRINTING_PRESS]: printingPress,
  [CardIds.EXPERIMENTATION]: experimentation,
  [CardIds.ASTRONOMY]: astronomy,
  [CardIds.MEASUREMENT]: measurement,
  [CardIds.STATISTICS]: statistics,
  [CardIds.CHEMISTRY]: chemistry,
  [CardIds.COAL]: coal,
  [CardIds.THE_PIRATE_CODE]: thePirateCode,
  [CardIds.STEAM_ENGINE]: steamEngine,
  [CardIds.BANKING]: banking,
  [CardIds.PHYSICS]: physics,
  [CardIds.SOCIETIES]: societies,
  [CardIds.ATOMIC_THEORY]: atomicTheory,
  [CardIds.EMANCIPATION]: emancipation,
  [CardIds.VACCINATION]: vaccination,
  [CardIds.CLASSIFICATION]: classification,
  [CardIds.METRIC_SYSTEM]: metricSystem,
  [CardIds.ENCYCLOPEDIA]: encyclopedia,
  [CardIds.MACHINE_TOOLS]: machineTools,
  [CardIds.INDUSTRIALIZATION]: industrialization,
  [CardIds.DEMOCRACY]: democracy,
  [CardIds.CANNING]: canning,
  [CardIds.COMBUSTION]: combustion,
  [CardIds.BICYCLE]: bicycle,
  [CardIds.EVOLUTION]: evolution,
  [CardIds.SANITATION]: sanitation,
  [CardIds.EXPLOSIVES]: explosives,
  [CardIds.ELECTRICITY]: electricity,
  [CardIds.PUBLICATIONS]: publications,
  [CardIds.LIGHTING]: lighting,
  [CardIds.RAILROAD]: railroad,
  [CardIds.REFRIGERATION]: refrigeration,
  [CardIds.ANTIBIOTICS]: antibiotics,
  [CardIds.MOBILITY]: mobility,
  [CardIds.FLIGHT]: flight,
  [CardIds.ROCKETRY]: rocketry,
  [CardIds.SKYSCRAPERS]: skyscrapers,
  [CardIds.SOCIALISM]: socialism,
  [CardIds.CORPORATIONS]: corporations,
  [CardIds.MASS_MEDIA]: massMedia,
  [CardIds.EMPIRICISM]: empiricism,
  [CardIds.QUANTUM_THEORY]: quantumTheory,
  [CardIds.COMPUTERS]: computers,
  [CardIds.COLLABORATION]: collaboration,
  [CardIds.GENETICS]: genetics,
  [CardIds.SERVICES]: services,
  [CardIds.SPECIALIZATION]: specialization,
  [CardIds.SUBURBIA]: suburbia,
  [CardIds.ECOLOGY]: ecology,
  [CardIds.FISSION]: fission,
  [CardIds.SATELLITES]: satellites,
  [CardIds.COMPOSITES]: composites,
  [CardIds.ROBOTICS]: robotics,
  [CardIds.BIOENGINEERING]: bioengineering,
  [CardIds.DATABASES]: databases,
  [CardIds.MINIATURIZATION]: miniaturization,
  [CardIds.SOFTWARE]: software,
  [CardIds.SELF_SERVICE]: selfService,
  [CardIds.AI]: ai,
  [CardIds.STEM_CELLS]: stemCells,
  [CardIds.GLOBALIZATION]: globalization,
  [CardIds.THE_INTERNET]: theInternet,
};
