// Insert a node into a sorted doubly linked list. 

// Easy difficulty.


function sortedInsert(head, data) {
    if(!head) {
        head = new DoublyLinkedListNode(data);
    }
    if(head.data > data) {
        let temp = new DoublyLinkedListNode(data);
        let nextTemp = head;
        head = temp;
        head.next = nextTemp;
        data = null;
    }
    
    let current = head;
    while(current) {
        if(data) {
            if(current.next) {
                if(current.next.data > data) {
                    let temp = new DoublyLinkedListNode(data);
                    let nextTemp = current.next;
                    current.next = temp;
                    current.next.prev = current;
                    current.next.next = nextTemp;
                    data = null;
                }
            } else {
                let temp = new DoublyLinkedListNode(data);
                current.next = temp;
                current.prev = current;
                data = null;
            }
        }
        current = current.next;
    }
    return head;
}
