import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html'
})
export class ContactComponent {

  sendViaWhatsApp(name: string, email: string, mobile: string, subject: string, message: string) {
    if (!name || !email || !mobile || !subject || !message) {
      alert('Please fill in all details before transmitting via WhatsApp.');
      return;
    }

    // Updated with the official company contact number from your screenshot
    const companyNumber = '917719927679';

    // Polished, highly scannable layout built to prevent text overflow or character corruption
    const structuredText =
      `============= NIMBAD INFOTECH =============\n` +
      `*1. CONTACT INFORMATION*\n` +
      `• Name: ${name.trim()}\n` +
      `• Email: ${email.trim()}\n` +
      `• Mobile: ${mobile.trim()}\n\n` +
      `*2. INQUIRY SPECIFICATIONS*\n` +
      `• Subject: ${subject.trim()}\n\n` +
      `*3. CLIENT MESSAGE BODY*\n` +
      `"${message.trim()}"\n\n` +
      `-------------------------------------------\n` +
      `Sent automatically via Nimbad Corporate Portal`;

    const encryptedPayload = encodeURIComponent(structuredText);

    // Uses the universal API link for seamless mobile app and web browser opening
    window.open(`https://api.whatsapp.com/send?phone=${companyNumber}&text=${encryptedPayload}`, '_blank');
  }

}
