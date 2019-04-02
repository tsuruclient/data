import {IStatus} from './Status';
import {ArticleType, EventType} from "./Enum";
import {IUser} from "../User";

export enum EventProperties {
    type = 'type',
    id = 'id',
    eventName = 'eventName',
    sourceUser = 'sourceUser',
    target = 'target',
}

export interface IEvent {
    [EventProperties.type]: ArticleType.event;
    [EventProperties.id]: string;
    [EventProperties.eventName]: EventType;
    [EventProperties.sourceUser]: IUser[];
    [EventProperties.target]?: IStatus;
}
