function sum(a) {
    var sum = a[0];
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

public class Main
{
    static int sum(int[] a) {
	    int total = 0;
        var sum = a;
        for(var i = 0; i < a.length; i++) {
            total += a[i];
        }
        return total;
    }
    
    public static void main(String[] args){
	    int[] test = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
	    int thing = sum(test);
	    System.out.println(thing);
    }
}
