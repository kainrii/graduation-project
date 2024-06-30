import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { fetchProfile } from "api/profile";

export const generatePdfForProfile = async (id) => {
  const profile = await fetchProfile(id);

  if (!profile) {
    throw new Error(`Talent profile with ID ${id} not found`);
  }

  const pdf = new jsPDF('p', 'pt', 'a4');
  let yPos = 50; // Initial y position

  // Add personal details
  pdf.setFontSize(18);
  pdf.text(`${profile.id}`, 50, yPos);
  yPos += 20; // Increase yPos for next line
  pdf.setFontSize(12);
  pdf.text(`First Name: ${profile.personalDetails.firstName}`, 50, yPos);
  yPos += 20;
  pdf.text(`Last Name: ${profile.personalDetails.lastName}`, 50, yPos);
  yPos += 20;
  pdf.text(`Email: ${profile.personalDetails.email}`, 50, yPos);
  yPos += 20;
  pdf.text(`Date of Birth: ${profile.personalDetails.dob}`, 50, yPos);
  yPos += 20;
  pdf.text(`Gender: ${profile.personalDetails.gender}`, 50, yPos);
  yPos += 20;
  pdf.text(`Phone: ${profile.personalDetails.phone}`, 50, yPos);
  yPos += 20;
  pdf.text(`Nationality: ${profile.personalDetails.nationality}`, 50, yPos);
  yPos += 20;
  pdf.text(`Address: ${profile.personalDetails.address}`, 50, yPos);
  yPos += 20;
  profile.personalDetails.socialNetworks.forEach((social) => {
    pdf.text(`${social.name} - ${social.link}`, 50, yPos);
    yPos += 20;
  });

  // Add educations
  yPos += 20; // Increase vertical spacing
  pdf.setFontSize(18);
  pdf.text('Educations', 50, yPos);
  yPos += 20;
  pdf.setFontSize(12);
  profile.background.educations.forEach((education) => {
    pdf.text(`Education: ${education.placeofEducation} - ${education.degree} - ${education.description}`, 50, yPos);
    yPos += 20;
  });

  // Add employments
  yPos += 20;
  pdf.setFontSize(18);
  pdf.text('Employments', 50, yPos);
  yPos += 20;
  pdf.setFontSize(12);
  profile.background.employments.forEach((employment) => {
    pdf.text(`Employment: ${employment.placeofEmployment} - ${employment.position} - ${employment.description}`, 50, yPos);
    yPos += 20;
  });

  // Add projects
  yPos += 20;
  pdf.setFontSize(18);
  pdf.text('Projects', 50, yPos);
  yPos += 20;
  pdf.setFontSize(12);
  profile.itSkills.projects.forEach((project) => {
    pdf.text(`Project: ${project.projectName} - ${project.projectDescription} - ${project.projectLink}`, 50, yPos);
    yPos += 20;
    pdf.text(`Skills: ${project.skills.join(', ')}`, 50, yPos);
    yPos += 20;
  });

  // Add preferences
  yPos += 20;
  pdf.setFontSize(18);
  pdf.text('Preferences', 50, yPos);
  yPos += 20;
  pdf.setFontSize(12);
  pdf.text(`Expected Salary: ${profile.preferences.expectedSalary}`, 50, yPos);
  yPos += 20;
  pdf.text(`Interested Field: ${profile.preferences.interestedField.join(', ')}`, 50, yPos);

  // Save the PDF
  pdf.save(`Talent_Profile_${profile.personalDetails.firstName}_${profile.personalDetails.lastName}.pdf`);
}
