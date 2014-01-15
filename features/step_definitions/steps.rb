Given(/^the program has finished$/) do
  @cucumber = `node example.js`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  lines.length.should >= 6

  lines[0 .. 1].join("\n").should =~ /^\*\*\* Failed!\n[0-9]+$/m
  lines[2].should == '+++ OK, passed 100 tests.'
  lines[3 .. -2].join("\n").should =~ /^\*\*\* Failed!\n.*/m
  lines[-1].should == '+++ OK, passed 100 tests.'
end
