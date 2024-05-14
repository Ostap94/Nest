import { TagEntity } from './tag.entity';
import { Repository } from 'typeorm';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<TagEntity>);
    findAll(): Promise<TagEntity[]>;
}
