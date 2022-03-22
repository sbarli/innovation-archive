import { CardIds } from '../../enums';

import { agriculture } from './agriculture';
import { ai } from './ai';
import { alchemy } from './alchemy';
import { anatomy } from './anatomy';
import { antibiotics } from './antibiotics';
import { archery } from './archery';
import { astronomy } from './astronomy';
import { atomicTheory } from './atomic-theory';
import { banking } from './banking';
import { bicycle } from './bicycle';
import { bioengineering } from './bioengineering';
import { calendar } from './calendar';
import { canalBuilding } from './canal-building';
import { canning } from './canning';
import { chemistry } from './chemistry';
import { cityStates } from './city-states';
import { classification } from './classification';
import { clothing } from './clothing';
import { coal } from './coal';
import { codeOfLaws } from './code-of-laws';
import { collaboration } from './collaboration';
import { colonialism } from './colonialism';
import { combustion } from './combustion';
import { compass } from './compass';
import { composites } from './composites';
import { computers } from './computers';
import { construction } from './construction';
import { corporations } from './corporations';
import { currency } from './currency';
import { databases } from './databases';
import { democracy } from './democracy';
import { domestication } from './domestication';
import { ecology } from './ecology';
import { education } from './education';
import { electricity } from './electricity';
import { emancipation } from './emancipation';
import { empiricism } from './empiricism';
import { encyclopedia } from './encyclopedia';
import { engineering } from './engineering';
import { enterprise } from './enterprise';
import { evolution } from './evolution';
import { experimentation } from './experimentation';
import { explosives } from './explosives';
import { fermenting } from './fermenting';
import { feudalism } from './feudalism';
import { fission } from './fission';
import { flight } from './flight';
import { genetics } from './genetics';
import { globalization } from './globalization';
import { gunpowder } from './gunpowder';
import { industrialization } from './industrialization';
import { invention } from './invention';
import { lighting } from './lighting';
import { machineTools } from './machine-tools';
import { machinery } from './machinery';
import { mapmaking } from './mapmaking';
import { masonry } from './masonry';
import { massMedia } from './mass-media';
import { mathematics } from './mathematics';
import { measurement } from './measurement';
import { medicine } from './medicine';
import { metalworking } from './metalworking';
import { metricSystem } from './metric-system';
import { miniaturization } from './miniaturization';
import { mobility } from './mobility';
import { monotheism } from './monotheism';
import { mysticism } from './mysticism';
import { navigation } from './navigation';
import { oars } from './oars';
import { optics } from './optics';
import { paper } from './paper';
import { perspective } from './perspective';
import { philosophy } from './philosophy';
import { physics } from './physics';
import { pottery } from './pottery';
import { printingPress } from './printing-press';
import { publications } from './publications';
import { quantumTheory } from './quantum-theory';
import { railroad } from './railroad';
import { reformation } from './reformation';
import { refrigeration } from './refrigeration';
import { roadBuilding } from './road-building';
import { robotics } from './robotics';
import { rocketry } from './rocketry';
import { sailing } from './sailing';
import { sanitation } from './sanitation';
import { satellites } from './satellites';
import { selfService } from './self-service';
import { services } from './services';
import { skyscrapers } from './skyscrapers';
import { socialism } from './socialism';
import { societies } from './societies';
import { software } from './software';
import { specialization } from './specialization';
import { statistics } from './statistics';
import { steamEngine } from './steam-engine';
import { stemCells } from './stem-cells';
import { suburbia } from './suburbia';
import { theInternet } from './the-internet';
import { thePirateCode } from './the-pirate-code';
import { theWheel } from './the-wheel';
import { tools } from './tools';
import { translation } from './translation';
import { vaccination } from './vaccination';
import { writing } from './writing';

export const effectsById = {
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
