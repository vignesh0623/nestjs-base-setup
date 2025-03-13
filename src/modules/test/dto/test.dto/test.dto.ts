import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class TestDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
    
  @IsNotEmpty({ message: 'Age is required' })
  @IsNumber()
  age: number;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;
} 