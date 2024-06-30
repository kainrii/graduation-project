import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { fetchProfile } from "api/profile";


export const  generatePdfForProfile = async (id) => {
    const profile = await fetchProfile(id);
  
    if (!profile) {
      throw new Error(`Talent profile with ID ${id} not found`);
    }
  
    const pdf = new jsPDF('p', 'pt', 'a4');
  
    // Add personal details
    pdf.setFontSize(18);
    pdf.text('Personal Details', 50, 50);
    pdf.setFontSize(12);
    pdf.text(`First Name: ${profile.personalDetails.firstName}`, 50, 70);
    pdf.text(`Last Name: ${profile.personalDetails.lastName}`, 50, 90);
    pdf.text(`Email: ${profile.personalDetails.email}`, 50, 110);
    pdf.text(`Date of Birth: ${profile.personalDetails.dob}`, 50, 130);
    pdf.text(`Gender: ${profile.personalDetails.gender}`, 50, 150);
    pdf.text(`Phone: ${profile.personalDetails.phone}`, 50, 170);
    pdf.text(`Nationality: ${profile.personalDetails.nationality}`, 50, 190);
    pdf.text(`Address: ${profile.personalDetails.address}`, 50, 210);
  
    // Add social networks
    pdf.setFontSize(18);
    pdf.text('Social Networks', 50, 240);
    pdf.setFontSize(12);
    let socialIndex = 1;
    profile.personalDetails.socialNetworks.forEach((social) => {
      pdf.text(`Social Network ${socialIndex++}: ${social.name} - ${social.link}`, 50, 260 + (socialIndex - 1) * 20);
    });
  
    // Add background
    pdf.setFontSize(18);
    pdf.text('Background', 50, 300);
  
    // Add educations
    pdf.setFontSize(18);
    pdf.text('Educations', 50, 320);
    pdf.setFontSize(12);
    let educationIndex = 1;
    profile.background.educations.forEach((education) => {
      pdf.text(`Education ${educationIndex++}: ${education.placeofEducation} - ${education.degree} - ${education.description}`, 50, 340 + (educationIndex - 1) * 20);
    });
  
    // Add employments
    pdf.setFontSize(18);
    pdf.text('Employments', 50, 380);
    pdf.setFontSize(12);
    let employmentIndex = 1;
    profile.background.employments.forEach((employment) => {
      pdf.text(`Employment ${employmentIndex++}: ${employment.placeofEmployment} - ${employment.position} - ${employment.description}`, 50, 400 + (employmentIndex - 1) * 20);
    });
  
    // Add IT skills
    pdf.setFontSize(18);
    pdf.text('IT Skills', 50, 440);
  
    // Add projects
    pdf.setFontSize(18);
    pdf.text('Projects', 50, 460);
    pdf.setFontSize(12);
    let projectIndex = 1;
    profile.itSkills.projects.forEach((project) => {
      pdf.text(`Project ${projectIndex++}: ${project.projectName} - ${project.projectDescription} - ${project.projectLink}`, 50, 480 + (projectIndex - 1) * 20);
      pdf.text(`Skills: ${project.skills.join(', ')}`, 50, 500 + (projectIndex - 1) * 20);
    });
  
    // Add preferences
    pdf.setFontSize(18);
    pdf.text('Preferences', 50, 540);
    pdf.setFontSize(12);
    pdf.text(`Expected Salary: ${profile.preferences.expectedSalary}`, 50, 560);
    pdf.text(`Interested Field: ${profile.preferences.interestedField.join(', ')}`, 50, 580);
  
    // Save the PDF
    pdf.save(`Talent_Profile_${id}.pdf`);
  }

