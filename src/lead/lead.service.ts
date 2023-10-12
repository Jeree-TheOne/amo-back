import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LeadService {
  async addLead(name: string) {
    return await axios.post('api/v4/leads', { name });
  }
}
