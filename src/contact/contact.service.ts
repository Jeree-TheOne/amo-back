import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ContactService {
  async addContact(name: string) {
    return await axios.post('api/v4/contacts', { name });
  }
}
