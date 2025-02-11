import makeTaskContent from './makeTaskContent';
import makeTaskList from './makeTaskList';
import makeDialogForm from './makeDialogForm';
import makeProjectList from './makeProjectList';

export default function getContent (type, projectList) {
    makeTaskContent(type);
    makeTaskList(type);
    makeDialogForm(type);
    makeProjectList(projectList);
}