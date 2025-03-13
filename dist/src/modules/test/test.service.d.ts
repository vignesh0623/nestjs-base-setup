import { TestDto } from './dto/test.dto/test.dto';
export declare class TestService {
    constructor();
    testPost(testDto: TestDto): Promise<TestDto>;
    testGet(id: string): Promise<string>;
}
