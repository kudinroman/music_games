server:
	bundle exec rails s 
dbreset:
	bundle exec rails db:drop && bundle exec rails db:create && bundle exec rails db:migrate && bundle exec rails db:seed
console:
	bundle exec rails c

