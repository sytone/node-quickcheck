Given(/^the program has finished$/) do
  @cucumber = `npm test`
end

Then(/^the output is correct for each test$/) do
  lines = @cucumber.split("\n")

  lines.length.should >= 10

  lines[-6 .. -5].join("\n").should =~ /^\*\*\* Failed!\n[0-9]+$/m
  lines[-4].should == '+++ OK, passed 100 tests.'
  lines[-3 .. -2].join("\n").should =~ /^\*\*\* Failed!\n.*/m
  lines[-1].should == '+++ OK, passed 100 tests.'
end
