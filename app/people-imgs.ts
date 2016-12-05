// Sample images of peopleImages
// Derived from Pluralsight icons
// import { peopleImages } from '../resources/people-imgs';
// Recommended resize: width="100px" height="116px"
// e.g. <img src="{{img}}" width="100px" height="116px"/>
const all = [
  'person.png',
  'Architect_Female_Blue.png',
  'Architect_Male_Blue.png',
  'Doctor_Female_Blue.png',
  'Doctor_Male_Blue.png',
  'Female_6_Blue.png',
  'Female_8_Blue.png',
  'Female_Sunglasses_Blue.png',
  'Male_3_Blue.png',
  'Male_7_Blue.png',
  'Male_Sunglasses_Blue.png',
  'Scientist_Female_Blue.png',
  'Scientist_Male_Blue.png'
];

export const peopleImages = {
  all: all,
  placeholder: all[0],
  male: all.filter(img => /Male_/.test(img)),
  female: all.filter(img => /Female_/.test(img)),
};
