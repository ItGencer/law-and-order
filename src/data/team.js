import { areas } from './areas.js';
import criminalLead from '../assets/images/team-criminal.jpg';
import civilLead from '../assets/images/team-civil.png';
import familyLead from '../assets/images/team-family.jpg';
import propertyLead from '../assets/images/team-property.jpg';

const leaderPhotos = [criminalLead, civilLead, familyLead, propertyLead];

export const team = areas.map((area, index) => ({
  ...area,
  photo: leaderPhotos[index],
}));