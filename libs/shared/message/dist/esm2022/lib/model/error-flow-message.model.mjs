import { AbstractMessage } from './abstract-message.model';
import { MessageType } from './message-type.enum';
export class ErrorFlowMessage extends AbstractMessage {
    constructor(messageGroupName, key) {
        super(MessageType.ERROR, messageGroupName, key, MessageType.ICON_ERROR);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZmxvdy1tZXNzYWdlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2RlbC9lcnJvci1mbG93LW1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBZTtJQUNuRCxZQUFZLGdCQUF3QixFQUFFLEdBQVc7UUFDL0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdE1lc3NhZ2UgfSBmcm9tICcuL2Fic3RyYWN0LW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuL21lc3NhZ2UtdHlwZS5lbnVtJztcblxuZXhwb3J0IGNsYXNzIEVycm9yRmxvd01lc3NhZ2UgZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlR3JvdXBOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG4gICAgc3VwZXIoTWVzc2FnZVR5cGUuRVJST1IsIG1lc3NhZ2VHcm91cE5hbWUsIGtleSwgTWVzc2FnZVR5cGUuSUNPTl9FUlJPUik7XG4gIH1cbn1cbiJdfQ==