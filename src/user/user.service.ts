import { Injectable } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional';

import { User } from '#entities/user.entity';

import { UsersRepository } from './user.repository';
import { UtilService } from '../../common';
import { LocalRegisterDto } from './dto';
import { SNSUserDto } from './dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly util: UtilService,
  ) {}

  @Transactional()
  public async createLocalUser(userData: LocalRegisterDto): Promise<User> {
    const { password, ...userWithoutPassword } = userData;
    const passwordHash = await this.util.passwordEncoding(password);
    const user = await this.usersRepository.create({
      passwordHash,
      ...userWithoutPassword,
    });
    return user;
  }

  public async createSNSUser(snsUserData: SNSUserDto): Promise<User> {
    const user = await this.usersRepository.create(snsUserData);
    return user;
  }

  public async isExistEmail(email: string): Promise<boolean> {
    return await this.usersRepository.isExistEmail(email);
  }

  public async update(userId: number, updateUserdata: UpdateUserDto): Promise<boolean> {
    return await this.usersRepository.update(userId, updateUserdata);
  }
}
