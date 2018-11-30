import {IReaction} from '../Reaction';
import {IReplyTo} from '../ReplyTo';
import {IUser} from '../User';
import {ArticleType} from "./Enum";

export enum StatusProperties {
    type = 'type',
    id = 'id',
    user = 'user',
    date = 'date',
    text = 'text',
    image = 'image',
    hasReaction = 'hasReaction',
    hasMention = 'hasMention',
    isThread = 'isThread',
}

export interface IStatus {
    [StatusProperties.type]: ArticleType.status;
    [StatusProperties.id]: string;
    [StatusProperties.user]: IUser;
    [StatusProperties.date]: string;

    [StatusProperties.text]?: string;
    [StatusProperties.image]?: string[];

    [StatusProperties.hasReaction]?: IReaction[];
    [StatusProperties.hasMention]?: IReplyTo;
    [StatusProperties.isThread]: boolean;
}
