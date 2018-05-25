package com.example.helloworld;

import org.junit.Test;

import java.util.Arrays;
import java.util.Collection;

import static com.google.common.collect.Lists.newArrayList;

public class HelloWorldApplicationTest {

  public static class Range {

    final int left;
    final int right;

    Range(int left, int right) {
      this.left = left;
      this.right = right;
    }

    static Range of(int left, int right) {
      return new Range(left, right);
    }

    @Override
    public String toString() {
      return "Range{" +
          "left=" + left +
          ", right=" + right +
          '}';
    }
  }


  public Range[] insertInterval(Range[] arr, Range toInsert) {
    Collection<Range> newArr = newArrayList();



    for (int i = 0; i < arr.length; ++i) {
      Range cur = arr[i];
      if (toInsert.right < cur.left) {
        newArr.add(toInsert);
        toInsert = cur;
      } else if (cur.right < toInsert.left) {
        newArr.add(cur);
      } else {
        int min = Math.min(cur.left, toInsert.left);
        int max = Math.max(cur.right, toInsert.right);

        toInsert = Range.of(min, max);
      }
    }

    newArr.add(toInsert);

    Range[] returnArr = new Range[newArr.size()];
    return newArr.toArray(returnArr);
  }

  @Test
  public void testInsertInterval1() {
    Range[] arr = new Range[2];

    arr[0] = Range.of(1, 3);
    arr[1] = Range.of(10, 12);

    arr = insertInterval(arr, Range.of(4, 5));

    System.out.println(Arrays.toString(arr));
  }

  @Test
  public void testInsertInterval() {
    Range[] arr = new Range[3];

    arr[0] = Range.of(1, 3);
    arr[1] = Range.of(5, 8);
    arr[2] = Range.of(9, 12);

    arr = insertInterval(arr, Range.of(1, 4));

    arr = insertInterval(arr, Range.of(4, 9));

    System.out.println(Arrays.toString(arr));
  }
}
