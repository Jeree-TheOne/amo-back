import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CompanyService {
  async addCompany(name: string) {
    return await axios.post('api/v4/companies', { name });
  }
}
