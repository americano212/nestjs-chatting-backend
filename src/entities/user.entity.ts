import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';
import { CoreEntity } from './core.entity';

@Entity('user')
export class User extends CoreEntity {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  @IsInt()
  public userId!: number;

  @ApiProperty({ example: '홍길동' })
  @Column({ type: 'varchar', nullable: true })
  @Length(2, 10)
  @IsString()
  public username?: string;

  @Column({ type: 'varchar', nullable: true, select: false })
  @IsString()
  public passwordHash?: string;

  @ApiProperty({ example: 'test@example.com' })
  @Column({ type: 'varchar', nullable: false, unique: true })
  @IsNotEmpty()
  @IsEmail()
  public email!: string;

  @Column({ type: 'varchar', nullable: true, select: false })
  @IsString()
  public refreshToken?: string;

  @ApiProperty({ example: 'google' })
  @Column({ type: 'varchar', nullable: true, default: '', select: false })
  @IsString()
  public vendor?: string;

  @ApiProperty({ example: '123456789' })
  @Column({ type: 'varchar', nullable: true, unique: true, select: false })
  @IsString()
  public socialId?: string;

  constructor(userId?: number) {
    super();
    if (userId) this.userId = userId;
  }
}
