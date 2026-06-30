package org.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.example.Calculator;

public class CalculatorTest {

    @Test
    public void testAddition() {

        Calculator c = new Calculator();

        int result = c.add(5,3);

        assertEquals(8,result);

    }
}
