#! /bin/bash

echo "===========================================";
echo "+------- test for rectangle pattern ------+";
echo "===========================================";

./script/run_test.sh ./create_rectangle_pattern.js ./app_test_data/input_files/input_file_rectangle_pattern.js ./app_test_data/expected_output/expected_output_rectangle_pattern;
result1=$? 

echo "===========================================";
echo "+------- test for triangle pattern -------+";
echo "===========================================";

./script/run_test.sh ./create_triangle_pattern.js ./app_test_data/input_files/input_file_triangle_pattern.js ./app_test_data/expected_output/expected_output_triangle_pattern;
result2=$?;

echo "===========================================";
echo "+------- test for diamond pattern --------+";
echo "===========================================";

./script/run_test.sh ./create_diamond_pattern.js ./app_test_data/input_files/input_file_diamond_pattern.js ./app_test_data/expected_output/expected_output_diamond_pattern
result3=$?;

if [ $result1 = 0 ]; then 
  echo rectangle test passed
else 
  echo rectangle test failed
fi

if [ $result2=0 ]; then 
  echo triangle test passed
else
  echo triangle test failed
fi

if [ $result3=0 ]; then
  echo diamond test passed
else 
  echo diamond test failed
fi
