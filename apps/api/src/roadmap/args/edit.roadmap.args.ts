import { AddRoadmapArgs } from './add.roadmap.args';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class EditRoadmapArgs extends PartialType(AddRoadmapArgs) {}
