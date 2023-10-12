import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async addContact(@Body() name) {
    const {
      data: {
        _embedded: { contacts },
      },
    } = await this.contactService.addContact(name);
    return contacts[0].id;
  }
}
