import { TestService } from './test.service';
import { TestDto } from './dto/test.dto/test.dto';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    testPost(testDto: TestDto): Promise<TestDto>;
    testGet(id: string): Promise<string>;
}
