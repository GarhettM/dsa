package javaChallenges;

import java.util.ArrayList;

public class PsuedoQueue {

    public StacksAndQueues<String> stack1;
    public StacksAndQueues<String> stack2;
    public Object Exception;


    public PsuedoQueue() {
        stack1 = new StacksAndQueues<String>();
        stack2 = new StacksAndQueues<String>();
    }

    public void enqueue(String value) {

        stack1.pushG(value);
    }

    public String dequeue(String pet) throws Throwable {
        boolean toggle = true;
        String temp = null;
        System.out.println("begin stack1: " + stack1.toString(stack1));

        while(stack1.topG != null) {
            stack2.pushG(stack1.popG());
        }



        while (stack2.topG != null) {
            if(toggle && stack2.topG.value.equals(pet)) {
                temp = stack2.popG();
                toggle = false;
            }
            if(stack2.topG == null) {
                break;
            }
            stack1.pushG(stack2.popG());
        }

        System.out.println("stack1 final: " + stack1.toString(stack1));
        System.out.println("Dequeued value: " + temp);
        return temp;
    }

}
