import { Injectable } from '@nestjs/common';
import { TestDto } from './dto/test.dto/test.dto';

@Injectable()
export class TestService {

    constructor() {}

    async testPost(testDto: TestDto) {
        return testDto;
    }
    
    async testGet(id: string) {
        return id;
    }
}
