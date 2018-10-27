#! /bin/bash
echo "===========================================";
echo "+------- test for rectangle pattern ------+";
echo "===========================================";

./script/run_test.sh ./create_rectangle_pattern.js ./app_test_data/input_files/input_file_rectangle_pattern.js ./app_test_data/expected_output/expected_output_rectangle_pattern;

echo "===========================================";
echo "+------- test for triangle pattern -------+";
echo "===========================================";

./script/run_test.sh ./create_triangle_pattern.js ./app_test_data/input_files/input_file_triangle_pattern.js ./app_test_data/expected_output/expected_output_triangle_pattern;

echo "===========================================";
echo "+------- test for diamond pattern --------+";
echo "===========================================";

./script/run_test.sh ./create_diamond_pattern.js ./app_test_data/input_files/input_file_diamond_pattern.js ./app_test_data/expected_output/expected_output_diamond_pattern;

echo "";
echo "+--------+ All Test Passed +-----------+";
echo "";
