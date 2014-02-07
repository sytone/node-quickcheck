guard :shell do
  watch(/^.*\.(js|json)$/) do |m|
    title = 'Test'
    eager 'mocha'
    status = ($?.success? && :success) || :failed
    n '', title, status
    ''
  end
end
