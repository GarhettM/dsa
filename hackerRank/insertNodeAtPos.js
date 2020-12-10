// Easy challenge to insert node into a linked list at a given position.

function insertNodeAtPosition(head, data, position) {
    if(!head) {
        return null;
    }

    let count = 1;
    let current = head;
    
    while(current) {
        if(count === position) {
            let temp = current.next;
            current.next = new SinglyLinkedListNode(data);
            current.next.next = temp;
        }
        count++;
        current = current.next;
    }
    return head;
}
