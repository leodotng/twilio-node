'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Query', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries('UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/understand/Services/<%= serviceSid %>/Queries/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'language': 'language',
          'date_created': '2015-07-30T20:00:00Z',
          'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'query': 'query',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'status',
          'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'results': {
              'intent': {
                  'name': 'name',
                  'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'confidence': 0.9
              },
              'entities': [
                  {
                      'name': 'name',
                      'value': 'value',
                      'type': 'type'
                  }
              ]
          },
          'url': 'https://preview.twilio.com/understand/Services/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries('UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {serviceSid: 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'};
      var url = _.template('https://preview.twilio.com/understand/Services/<%= serviceSid %>/Queries')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'queries': [],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'first_page_url': 'https://preview.twilio.com/understand/Services/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?PageSize=50&Page=0',
              'page': 0,
              'key': 'queries',
              'url': 'https://preview.twilio.com/understand/Services/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?PageSize=50&Page=0',
              'page_size': 50
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'queries': [
              {
                  'language': 'language',
                  'date_created': '2015-07-30T20:00:00Z',
                  'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'query': 'query',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'status': 'status',
                  'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'results': {
                      'intent': {
                          'name': 'name',
                          'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                          'confidence': 0.9
                      },
                      'entities': [
                          {
                              'name': 'name',
                              'value': 'value',
                              'type': 'type'
                          }
                      ]
                  },
                  'url': 'https://preview.twilio.com/understand/Services/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'first_page_url': 'https://preview.twilio.com/understand/Services/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?PageSize=50&Page=0',
              'page': 0,
              'key': 'queries',
              'url': 'https://preview.twilio.com/understand/Services/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries?PageSize=50&Page=0',
              'page_size': 50
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {language: 'language', query: 'query'};
      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {serviceSid: 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'};
      var url = _.template('https://preview.twilio.com/understand/Services/<%= serviceSid %>/Queries')(solution);

      var values = {Language: 'language', Query: 'query',};
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'language': 'language',
          'date_created': '2015-07-30T20:00:00Z',
          'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'query': 'query',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'status',
          'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'results': {
              'intent': {
                  'name': 'name',
                  'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'confidence': 0.9
              },
              'entities': [
                  {
                      'name': 'name',
                      'value': 'value',
                      'type': 'type'
                  }
              ]
          },
          'url': 'https://preview.twilio.com/understand/Services/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {language: 'language', query: 'query'};
      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries('UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/understand/Services/<%= serviceSid %>/Queries/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'language': 'language',
          'date_created': '2015-07-30T20:00:00Z',
          'model_build_sid': 'UGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'query': 'query',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'status',
          'sample_sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'results': {
              'intent': {
                  'name': 'name',
                  'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'confidence': 0.9
              },
              'entities': [
                  {
                      'name': 'name',
                      'value': 'value',
                      'type': 'type'
                  }
              ]
          },
          'url': 'https://preview.twilio.com/understand/Services/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries/UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries('UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries('UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/understand/Services/<%= serviceSid %>/Queries/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.preview.understand.services('UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                             .queries('UHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

